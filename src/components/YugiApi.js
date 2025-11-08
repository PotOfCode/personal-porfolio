import React from "react";
import axios from "axios";

export function YugiApi({URLAPI}) {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    axios.get(URLAPI)
      .then(response => {
        setCards(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching data from Yugi API:", error);
      });
  }, []);

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.map(card => (
        <div key={card.id} class="border rounded-lg p-4 shadow-md bg-gradient-to-tr from-slate-800 via-slate-900 to-black text-white">
          <img src={card.card_images[0].image_url} alt={card.name} class="w-full h-auto mb-4" />
          <h2 class="text-lg font-bold mb-2">{card.name}</h2>
          <p class="text-sm font-bold">{card.type}</p>
          {card.atk !== undefined && (
            <p className="text-sm font-bold">ATK: {card.atk}</p>
          )}
          {card.def !== undefined && card.def !== null &&(
            <p className="text-sm font-bold">DEF: {card.def}</p>
          )}
          <p class="text-sm font-bold">{card.type === "XYZ Monster" ? `Rango: ★${card.level}` : card.level ? `Nivel: ${card.level}★` : card.linkval ? `Rating de Enlace: ${card.linkval}` : ''}</p>
          {card.linkmarkers !== undefined &&(
            <p className="text-sm font-bold">Marcador de Enlace: {card.linkmarkers.join(' | ')}</p>
          )}
          {card.type === "Spell Card" && (
            <p className="text-sm font-bold">Tipo: {card.humanReadableCardType}</p>
          )}
          {card.type === "Trap Card" && (
            <p className="text-sm font-bold">Tipo: {card.humanReadableCardType}</p>
          )}
        </div>
      ))}
    </div>
  );
}
