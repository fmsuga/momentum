//app para delay efectos
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cards() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

  return (
    <div className="flex flex-col gap-4 items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-lg w-64 text-center"
          data-aos="fade-up"
          data-aos-delay={index * 200} // Cada card aparece con 200ms más de delay
        >
          {card}
        </div>
      ))}
    </div>
  );
}