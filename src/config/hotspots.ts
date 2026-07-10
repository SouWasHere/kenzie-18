export interface Hotspot {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const HOTSPOTS = {
  page2: {
    venue: {
      x: 16,
      y: 49,
      w: 68,
      h: 20,
    } as Hotspot,
  },

  page3: {
    rsvp: {
      x: 10,
      y: 60,
      w: 39,
      h: 10,
    } as Hotspot,

    dressCode: {
      x: 55,
      y: 35,
      w: 35,
      h: 15,
    } as Hotspot,
  },

  page4: {
    traditions: {
      x: 15,
      y: 37,
      w: 55,
      h: 25,
    } as Hotspot,

    surprise: {
      x: 52,
      y: 74,
      w: 30,
      h: 10,
    } as Hotspot,
  },

  page5: {
    altoids: {
      x: 10,
      y: 70,
      w: 30,
      h: 15,
    } as Hotspot,

    upload: {
      x: 65,
      y: 48,
      w: 24,
      h: 15,
    } as Hotspot,

    cd: {
      x: 45,
      y: 80,
      w: 30,
      h: 15,
    } as Hotspot,
  },
};