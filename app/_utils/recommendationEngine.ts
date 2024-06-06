export default function recommendationEngine(campaigns: any, interests: any) {
  //   console.log(campaigns);
  //   console.log(interests);

  let fullMatch = [];
  let halfMatch = [];
  let noMatch = [];

  //   let interests = {
  //     types: [
  //       "recuperacao de nascentes",
  //       "gestao de residuos",
  //       "economia circular",
  //     ],
  //     affectedRegions: ["caatinga", "reconcavo baiano", "costa do descobrimento"],
  //   };

  for (let i = 0; i < campaigns.length; i++) {
    let score = 0;

    let campaign = campaigns[i];
    if (interests.types.includes(campaign.type)) score++;
    if (interests.affectedRegions.includes(campaign.affectedRegion)) score++;
    if (score === 2) {
      fullMatch.push(campaign.uid);
      if (fullMatch.length === 5) {
        break;
      }
    } else if (score === 1) {
      halfMatch.push(campaign.uid);
    } else {
      noMatch.push(campaign.uid);
    }
  }

  // console.log(fullMatch)
  // console.log(halfMatch)

  let recommendations = [];

  for (let i = 0; i < 5; i++) {
    if (fullMatch.length > 0) {
      recommendations.push(fullMatch.pop());
    } else if (halfMatch.length > 0) {
      recommendations.push(halfMatch.pop());
    } else {
      recommendations.push(noMatch.pop());
    }
  }

  return recommendations;
}

// const projects = [
//     {type: "preservacao animal", affectedRegion: "floresta amazonica"},
//     {type: "reflorestamento", affectedRegion: "pantanal mato-grossense"},
//     {type: "educacao ambiental", affectedRegion: "mata atlantica"},
//     {type: "manejo sustentavel", affectedRegion: "cerrado"},
//     {type: "recuperacao de nascentes", affectedRegion: "caatinga"},
//     {type: "agricultura organica", affectedRegion: "pampas"},
//     {type: "conservacao de biodiversidade", affectedRegion: "chapada diamantina"},
//     {type: "ecoturismo", affectedRegion: "serra gaucha"},
//     {type: "coleta seletiva", affectedRegion: "serra do mar"},
//     {type: "reciclagem", affectedRegion: "pantanal sul-mato-grossense"},
//     {type: "energia renovavel", affectedRegion: "planalto central"},
//     {type: "saneamento basico", affectedRegion: "costa do descobrimento"},
//     {type: "protecao de areas umidas", affectedRegion: "chapada dos veadeiros"},
//     {type: "agroflorestas", affectedRegion: "serra da mantiqueira"},
//     {type: "combate a desertificacao", affectedRegion: "planicie litoranea"},
//     {type: "gestao de residuos", affectedRegion: "delta do parnaiba"},
//     {type: "protecao de corais", affectedRegion: "serra do espinhaco"},
//     {type: "monitoramento ambiental", affectedRegion: "reconcavo baiano"},
//     {type: "economia circular", affectedRegion: "vale do paraiba"},
//     {type: "restauracao de ecossistemas", affectedRegion: "chapada dos guimaraes"},
//     {type: "preservacao animal", affectedRegion: "serra gaucha"},
//     {type: "reflorestamento", affectedRegion: "serra do mar"},
//     {type: "educacao ambiental", affectedRegion: "pantanal sul-mato-grossense"},
//     {type: "manejo sustentavel", affectedRegion: "planalto central"},
//     {type: "recuperacao de nascentes", affectedRegion: "costa do descobrimento"},
//     {type: "agricultura organica", affectedRegion: "chapada dos veadeiros"},
//     {type: "conservacao de biodiversidade", affectedRegion: "serra da mantiqueira"},
//     {type: "ecoturismo", affectedRegion: "planicie litoranea"},
//     {type: "coleta seletiva", affectedRegion: "delta do parnaiba"},
//     {type: "reciclagem", affectedRegion: "serra do espinhaco"},
//     {type: "energia renovavel", affectedRegion: "reconcavo baiano"},
//     {type: "saneamento basico", affectedRegion: "vale do paraiba"},
//     {type: "protecao de areas umidas", affectedRegion: "chapada dos guimaraes"},
//     {type: "agroflorestas", affectedRegion: "floresta amazonica"},
//     {type: "combate a desertificacao", affectedRegion: "pantanal mato-grossense"},
//     {type: "gestao de residuos", affectedRegion: "mata atlantica"},
//     {type: "protecao de corais", affectedRegion: "cerrado"},
//     {type: "monitoramento ambiental", affectedRegion: "caatinga"},
//     {type: "economia circular", affectedRegion: "pampas"},
//     {type: "restauracao de ecossistemas", affectedRegion: "chapada diamantina"},
//     {type: "preservacao animal", affectedRegion: "serra do espinhaco"},
//     {type: "reflorestamento", affectedRegion: "reconcavo baiano"},
//     {type: "educacao ambiental", affectedRegion: "vale do paraiba"},
//     {type: "manejo sustentavel", affectedRegion: "chapada dos guimaraes"},
//     {type: "recuperacao de nascentes", affectedRegion: "floresta amazonica"},
//     {type: "agricultura organica", affectedRegion: "pantanal mato-grossense"},
//     {type: "conservacao de biodiversidade", affectedRegion: "mata atlantica"},
//     {type: "ecoturismo", affectedRegion: "cerrado"},
//     {type: "coleta seletiva", affectedRegion: "caatinga"},
//     {type: "reciclagem", affectedRegion: "pampas"},
//     {type: "energia renovavel", affectedRegion: "chapada diamantina"},
//     {type: "saneamento basico", affectedRegion: "serra gaucha"},
//     {type: "protecao de areas umidas", affectedRegion: "serra do mar"},
//     {type: "agroflorestas", affectedRegion: "pantanal sul-mato-grossense"},
//     {type: "combate a desertificacao", affectedRegion: "planalto central"},
//     {type: "gestao de residuos", affectedRegion: "costa do descobrimento"},
//     {type: "protecao de corais", affectedRegion: "chapada dos veadeiros"},
//     {type: "monitoramento ambiental", affectedRegion: "serra da mantiqueira"},
//     {type: "economia circular", affectedRegion: "planicie litoranea"},
//     {type: "restauracao de ecossistemas", affectedRegion: "delta do parnaiba"},
//     {type: "preservacao animal", affectedRegion: "chapada dos guimaraes"},
//     {type: "reflorestamento", affectedRegion: "serra do espinhaco"},
//     {type: "educacao ambiental", affectedRegion: "reconcavo baiano"},
//     {type: "manejo sustentavel", affectedRegion: "vale do paraiba"},
//     {type: "recuperacao de nascentes", affectedRegion: "chapada dos guimaraes"},
//     {type: "agricultura organica", affectedRegion: "floresta amazonica"},
//     {type: "conservacao de biodiversidade", affectedRegion: "pantanal mato-grossense"},
//     {type: "ecoturismo", affectedRegion: "mata atlantica"},
//     {type: "coleta seletiva", affectedRegion: "cerrado"},
//     {type: "reciclagem", affectedRegion: "caatinga"},
//     {type: "energia renovavel", affectedRegion: "pampas"},
//     {type: "saneamento basico", affectedRegion: "chapada diamantina"},
//     {type: "protecao de areas umidas", affectedRegion: "serra gaucha"},
//     {type: "agroflorestas", affectedRegion: "serra do mar"},
//     {type: "combate a desertificacao", affectedRegion: "pantanal sul-mato-grossense"},
//     {type: "gestao de residuos", affectedRegion: "planalto central"},
//     {type: "protecao de corais", affectedRegion: "costa do descobrimento"},
//     {type: "monitoramento ambiental", affectedRegion: "chapada dos veadeiros"},
//     {type: "economia circular", affectedRegion: "serra da mantiqueira"},
//     {type: "restauracao de ecossistemas", affectedRegion: "planicie litoranea"},
//     {type: "preservacao animal", affectedRegion: "delta do parnaiba"},
//     {type: "reflorestamento", affectedRegion: "serra do espinhaco"},
//     {type: "educacao ambiental", affectedRegion: "reconcavo baiano"},
//     {type: "manejo sustentavel", affectedRegion: "vale do paraiba"},
//     {type: "recuperacao de nascentes", affectedRegion: "chapada dos guimaraes"},
//     {type: "agricultura organica", affectedRegion: "floresta amazonica"},
//     {type: "conservacao de biodiversidade", affectedRegion: "pantanal mato-grossense"},
//     {type: "ecoturismo", affectedRegion: "mata atlantica"},
//     {type: "coleta seletiva", affectedRegion: "cerrado"},
//     {type: "reciclagem", affectedRegion: "caatinga"},
//     {type: "energia renovavel", affectedRegion: "pampas"},
//     {type: "saneamento basico", affectedRegion: "chapada diamantina"}
//   ];
