//Helper Function
function arrayIncludes(arr, values) {
  let allGood = true;
  for (let i = 0; i < values.length; i++) {
    if (!arr.includes(values[i])) {
      allGood = false;
      break;
    }
  }
  return allGood;
}

const countMatches = (searchStr, matchStr) => {
  const regex = new RegExp(`\\${matchStr}`, 'g');
  const matches = searchStr.match(regex);

  return matches.length;
};

//Test Suite
describe('js-day1-basic-assessment', function () {
  describe('Problem 1: Instrument', () => {
  let instrument;

  beforeEach(() => {
    instrument = new Instrument('Piano', 2000);
  });

  it('should set the name and price properties correctly', () => {
    expect(instrument.name).toEqual('Piano');
    expect(instrument.price).toEqual(2000);
  });

  it('should have a play method that returns a string', () => {
    expect(typeof instrument.play()).toEqual('string');
  });

  it('should return the correct string when the play method is called', () => {
    expect(instrument.play()).toEqual('Piano is making noise');
  });
});

describe('Problem 2: Guitar', () => {
  let guitar;

  beforeEach(() => {
    guitar = new Guitar('Guitar', 2000, 6, true, 'Mahogany');
  });

  it('should extend the Instrument class', () => {
    expect(guitar instanceof Instrument).toBe(true);
  });

  it('should set the name, price, strings, isElectric, and bodyWood properties correctly', () => {
    expect(guitar.name).toEqual('Guitar');
    expect(guitar.price).toEqual(2000);
    expect(guitar.strings).toEqual(6);
    expect(guitar.isElectric).toEqual(true);
    expect(guitar.bodyWood).toEqual('Mahogany');
  });

  it('should have a play method that returns a string', () => {
    expect(typeof guitar.play()).toEqual('string');
  });

  it('should return the correct string when the play method is called', () => {
    expect(guitar.play()).toEqual('Guitar is shredding');
  });
});

describe('Problem 3: Shape', () => {
  let shape;

  beforeEach(() => {
    shape = new Shape(6);
  });

  it('should set the sides property correctly', () => {
    expect(shape.sides).toEqual(6);
  });

  describe('isValidShape', () => {
    it('should return true if the shape has at least 3 sides', () => {
      expect(Shape.isValidShape(new Shape(3))).toBe(true);
      expect(Shape.isValidShape(new Shape(4))).toBe(true);
      expect(Shape.isValidShape(new Shape(5))).toBe(true);
      expect(Shape.isValidShape(new Shape(6))).toBe(true);
    });

    it('should return false if the shape has less than 3 sides', () => {
      expect(Shape.isValidShape(new Shape(2))).toBe(false);
      expect(Shape.isValidShape(new Shape(1))).toBe(false);
      expect(Shape.isValidShape(new Shape(0))).toBe(false);
    });
  });
});

describe('Problem 4: Employee', () => {
  let derek, marty;

  beforeEach(() => {
    derek = new Employee('Derek');
    marty = new Employee('Marty', derek);
  });

  it('should set the name property correctly', () => {
    expect(derek.name).toEqual('Derek');
    expect(marty.name).toEqual('Marty');
  });

  it('should set the manager property correctly', () => {
    expect(derek.manager).toBeNull();
    expect(marty.manager).toEqual(derek);
  });
});

describe('Problem 5: FormField', () => {
  let formField;

  beforeEach(() => {
    formField = new FormField('Username', 'text');
  });

  it('should set the label, type, and value properties correctly', () => {
    expect(formField.label).toEqual('Username');
    expect(formField.type).toEqual('text');
    expect(formField.value).toEqual('');
  });

  describe('updateValue', () => {
    it('should update the value property of the form field', () => {
      formField.updateValue('test');
      expect(formField.value).toEqual('test');
    });
  });
});

describe('Problem 6: Form', () => {
  let form;

  beforeEach(() => {
    form = new Form([new FormField('username', 'text'), new FormField('password', 'password')]);
  });

  it('should set the fields property correctly', () => {
    expect(form.fields).toEqual({ username: jasmine.any(FormField), password: jasmine.any(FormField) });
  });

  describe('updateField', () => {
    it('should update the value of the corresponding FormField object', () => {
      form.updateField('username', 'derek');
      expect(form.fields.username.value).toEqual('derek');
    });
  });

  describe('values', () => {
    it('should return an object with the correct values', () => {
      form.updateField('username', 'derek');
      expect(form.values()).toEqual({ username: 'derek', password: '' });
    });
  });
});
});
