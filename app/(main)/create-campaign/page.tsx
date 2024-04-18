"use client";

import React, { useState } from "react";

export default function CreateCampaign() {
  const [title, setTitle] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");
  const [goal, setGoal] = useState(0);
  const [isAd, setIsAd] = useState("");
  const [isCombu, setIsCombu] = useState("");
  const [isNonProfit, setIsNonProfit] = useState("");
  const [affectedRegion, setAffectedRegion] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="py-8 w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="container w-auto p-4 flex flex-col gap-4"
      >
        <input
          placeholder="Titulo da campanha"
          className="w-[400px] h-12 input-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          placeholder="URL da capa do projeto"
          className="w-[400px] h-12 input-1"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
        ></input>
        <input
          placeholder="Tipo"
          className="w-[400px] h-12 input-1"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <input
          placeholder="Descricao"
          className="w-[400px] h-12 input-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          placeholder="Fotos adicionais (URLs separadas por espaco)"
          className="w-[400px] h-12 input-1"
          value={photos}
          onChange={(e) => setPhotos(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Meta de contribuicao"
          className="w-[400px] h-12 input-1"
          value={goal}
          onChange={(e) => setGoal(parseInt(e.target.value))}
        ></input>
        <input
          type="text"
          placeholder="Regiao afetada"
          className="w-[400px] h-12 input-1"
          value={affectedRegion}
          onChange={(e) => setAffectedRegion(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Se passa no combu?"
          className="w-[400px] h-12 input-1"
          value={isCombu}
          onChange={(e) => setIsCombu(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Eh um anuncio?"
          className="w-[400px] h-12 input-1"
          value={isAd}
          onChange={(e) => setIsAd(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Eh sem fins lucrativos?"
          className="w-[400px] h-12 input-1"
          value={isNonProfit}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button type="submit" className="btn-1 w-full h-12">
          Publicar
        </button>
      </form>
    </div>
  );
}
