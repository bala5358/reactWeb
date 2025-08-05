import styles from './styles.module.css';

export default function BoothTooltip({ boothId, name, percentage, voters }) {
  return (
    <div className={styles.tooltip}>
      <h3>{name} (Booth #{boothId})</h3>
      <div className={styles.tooltipRow}>
        <span>Turnout:</span>
        <span>{percentage}%</span>
      </div>
      <div className={styles.tooltipRow}>
        <span>Voters Captured:</span>
        <span>{voters?.captured || 0}/{voters?.total || 0}</span>
      </div>
    </div>
  );
}