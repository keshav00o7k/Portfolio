import '../css/impactMetrics.css';

const metrics = [
  {
    icon: 'fa-solid fa-globe',
    stat: '3+ Live Platforms',
    title: 'Production Deployments',
    desc: 'Fotographiya AI, Main & Wedding commercial portals.',
  },
  {
    icon: 'fa-solid fa-bolt',
    stat: 'Sub-Second',
    title: 'AI Facial Search',
    desc: 'Vector embeddings with InsightFace & FAISS.',
  },
  {
    icon: 'fa-solid fa-layer-group',
    stat: 'MERN + CV',
    title: 'Full-Stack Architecture',
    desc: 'Scalable REST APIs, MongoDB & Computer Vision pipelines.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    stat: 'Secure & Async',
    title: 'Backend Systems',
    desc: 'JWT auth, Email OTP & asynchronous media queues.',
  },
];

const ImpactMetrics = () => {
  return (
    <div className="metrics-grid">
      {metrics.map((item, index) => (
        <div key={index} className="metric-card">
          <div className="metric-card__header">
            <div className="metric-card__icon-box">
              <i className={item.icon}></i>
            </div>
            <span className="metric-card__stat">{item.stat}</span>
          </div>

          <div className="metric-card__title">{item.title}</div>

          <p className="metric-card__desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactMetrics;
