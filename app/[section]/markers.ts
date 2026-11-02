// Posición aproximada (x%, y%) de cada corte sobre la ilustración del animal.
// Las claves son EXACTAMENTE el header del corte en sections.json.
// Los cortes que no son una zona anatómica concreta (embutidos, salchichas,
// carne picada, "para guisos", pechuga de pavo...) no llevan marcador.
// Ajusta estos porcentajes a ojo sobre cada dibujo hasta que te cuadren.

export type Point = [number, number]

export const MARKERS: Record<string, Record<string, Point>> = {
  pork: {
    'Cerdo blanco': [33, 44],
    'Cerdo ibérico': [48, 40],
    'Chuletas de cerdo': [46, 29],
    'Cinta de lomo': [57, 28],
    'Costillas de cerdo': [42, 53],
    'Solomillo de cerdo': [67, 37],
  },
  veal: {
    'Babilla (filetes de ternera blanca)': [71, 52],
    'Lomo alto y lomo bajo (entrecot)': [52, 30],
    'Morcillo de ternera': [33, 62],
    Solomillo: [61, 39],
    Tapilla: [73, 44],
  },
  cow: {
    'Rabo de vaca o toro': [85, 34],
  },
  lamb: {
    Chuletas: [50, 32],
    'Paletilla y pierna': [63, 47],
  },
  chicken: {
    Alitas: [53, 40],
    Contramuslo: [42, 66],
    'Cuarto trasero': [35, 71],
    'Patas y otras piezas': [40, 88],
    Pechuga: [67, 56],
    'Solomillo de pollo': [62, 63],
  },
}
