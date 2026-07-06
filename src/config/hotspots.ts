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
      x: 31,
      y: 72,
      w: 39,
      h: 7,
    } as Hotspot,

    dressCode: {
      x: 34,
      y: 82,
      w: 32,
      h: 6,
    } as Hotspot,
  },

  page4: {
    traditions: {
      x: 20,
      y: 74,
      w: 28,
      h: 8,
    } as Hotspot,

    surprise: {
      x: 52,
      y: 74,
      w: 28,
      h: 8,
    } as Hotspot,
  },

  page5: {
    altoids: {
      x: 18,
      y: 73,
      w: 28,
      h: 8,
    } as Hotspot,

    upload: {
      x: 53,
      y: 73,
      w: 28,
      h: 8,
    } as Hotspot,
  },
};