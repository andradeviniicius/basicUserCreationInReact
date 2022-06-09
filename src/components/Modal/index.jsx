export default function Modal({emptyName, emptyAge, negativeValue}) {
    console.log(emptyName, emptyAge, negativeValue);

  return (
    <>
      <div className="modal">
          {emptyName && <p>Please enter your name</p>}
          {emptyAge && <p>Please enter your age</p>}
          {negativeValue && <p>Please enter a valid number</p>}
        <button type="button">Cancel</button>
      </div>
    </>
  );
}
