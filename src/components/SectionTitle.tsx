const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="section-title">
      <div className="section-eyebrow">
        <span className="section-eyebrow-line"></span>
        <span>{subTitle}</span>
        <span className="section-eyebrow-line-end"></span>
      </div>
      <h2 className="section-heading">{title}</h2>
    </div>
  );
};

export default SectionTitle;