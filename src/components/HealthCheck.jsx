import { getHealth } from "../services/api";
import { useFetch } from "../hooks/useFetch";
import GlassSpinnerLoader from "./GlassSpinnerLoader";

function HealthCheck() {
  const { data, loading, error } = useFetch(getHealth);

  if (loading) return (
    <div style={{ textAlign: 'center', margin: '24px 0' }}>
      <GlassSpinnerLoader size={44} />
      <div style={{ 
        color: '#1e40af', 
        fontWeight: 600, 
        fontSize: '1.1em', 
        marginTop: 12,
        letterSpacing: '0.025em'
      }}>
        Checking health...
      </div>
    </div>
  );

  if (error) return (
    <div style={{
      color: '#dc2626',
      fontWeight: 600,
      fontSize: '1.15em',
      background: 'rgba(254, 226, 226, 0.8)',
      borderRadius: '12px',
      display: 'inline-block',
      padding: '16px 24px',
      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.15)',
      border: '1px solid rgba(220, 38, 38, 0.2)'
    }}>
      ❌ {error}
    </div>
  );

  return (
    <div style={{
      color: data.status === 'ok' ? '#059669' : '#dc2626',
      fontWeight: 700,
      fontSize: '1.25em',
      background: data.status === 'ok' 
        ? 'rgba(209, 250, 229, 0.8)' 
        : 'rgba(254, 226, 226, 0.8)',
      borderRadius: '16px',
      display: 'inline-block',
      padding: '20px 32px',
      boxShadow: data.status === 'ok'
        ? '0 4px 12px rgba(5, 150, 105, 0.15)'
        : '0 4px 12px rgba(220, 38, 38, 0.15)',
      border: data.status === 'ok'
        ? '1px solid rgba(5, 150, 105, 0.2)'
        : '1px solid rgba(220, 38, 38, 0.2)',
      letterSpacing: '0.025em'
    }}>
      {data.status === 'ok' ? '✅' : '❌'} System {data.status}
    </div>
  );
}

export default HealthCheck;
