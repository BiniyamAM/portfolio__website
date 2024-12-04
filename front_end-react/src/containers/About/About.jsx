import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;
    client.fetch(query).then((data) => setAbouts(data));
  });
  return (
    <>
      <h2 className="head-text">
        I know that <span>Great Apps</span> Leads To <br />
        <span>Great business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h3 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h3>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
