import ExpertiseCard from './ExpertiseCard';
import EducationCard from './EducationCard';
import SkillsCard from './SkillsCard';
import LanguagesCard from './LanguagesCard';

const ResumeSection = () => {
  return (
    <section className="section" id="resume">
      <div className="container">
        <h2 className="mb-5"> Mi <span className="text-danger">CV</span> resumido</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <ExpertiseCard />
          </div>
          <div className="col-md-6 col-lg-4">
            <EducationCard />
          </div>
          <div className="col-lg-4">
            <SkillsCard />
            <LanguagesCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
