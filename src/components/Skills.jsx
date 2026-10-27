import { skills } from "../data";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skill-content">
        <h2>My Skills</h2>

        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
