import { certificates } from '../data';

function Certificates() {
  return (
    <section className="py-20 bg-black text-white px-4 pt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Certificates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
              <p className="text-gray-300 mb-4">{cert.date}</p>
              
              {/* Step by Step Process */}
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2 text-blue-300">Learning Journey</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                  <li>Completed foundational coursework in {cert.title.includes("Data") ? "data science principles" : "Python programming fundamentals"}</li>
                  <li>Mastered practical skills through hands-on projects</li>
                  <li>Passed rigorous assessment with distinction</li>
                  <li>Received official certification</li>
                </ol>
              </div>
              
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;