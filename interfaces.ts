interface Rect {
  readonly id: string,
  color?: string,
  size: {
    width: number,
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 30,
    height: 20
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 30,
    height: 20
  }
}

rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ====
interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 50,
    height: 40
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
}

// ====

interface IClock {
  date: Date,
  setTime(date: Date): void
}

class Clock implements IClock {
  date: Date = new Date();

  setTime(date: Date): void {
    this.date = date;
  }
}

// ====

interface Styles {
  [key: string]: string | number
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}

