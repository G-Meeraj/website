import { skills } from '../data';

function Skills() {
  return (
    <section className="py-20 px-4 pt-32 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center p-6 bg-gray-800 rounded-xl shadow-md">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;