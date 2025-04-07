function About() {
  return (
    <section className="py-20 px-4 pt-32 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
        <div className="mb-8">
          <img 
            src="https://i.ibb.co/MyLSCbG8/profile1.jpg" 
            alt="profile1"
            className="w-48 h-48 rounded-lg mx-auto mb-6 border-4 border-gray-600 shadow-xl"
          />
        </div>
        <p className="text-lg text-gray-300 mb-6">
          I'm a passionate Data Scientist and Analyst with a strong foundation in statistics, machine learning, and data visualization. I specialize in turning complex datasets into actionable insights that drive strategic decisions and business growth.
        </p>
        <p className="text-lg text-gray-300">
          With hands-on experience in Python, R, SQL, and tools like Pandas, Scikit-learn, Power BI, and Tableau, I've built and deployed models for predictive analytics, classification problems, and trend analysis across various domains.
        </p>
      </div>
    </section>
  );
}

export default About;