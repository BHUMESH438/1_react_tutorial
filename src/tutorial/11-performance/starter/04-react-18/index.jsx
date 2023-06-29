import { useState, useTransition, Suspense, lazy } from 'react';
//import the  suspense and lazy and import the required function as import function
const SlowComponent = lazy(() => import('./SlowComponent'));
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  //ispending is for bu
  const [isPending, startTransition] = useTransition();
  const [show, setshow] = useState(false);

  //fit the fun inside the stat transition and the start function inside the handlechange component
  const handleChange = e => {
    setText(e.target.value); //after typing and the next will happen
    startTransition(() => {
      // slow down CPU
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src='/vite.svg' alt='helo' />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className='form'>
        <input type='text' className='form-input' value={text} onChange={handleChange} />
      </form>
      <h4>Items Below</h4>
      {/* react transition */}
      {/* we will  get it form the input */}
      {/* after typing this action take palce it reduce the time 5sec to 2 sec */}
      {isPending ? (
        <h1>loading...</h1>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem'
          }}
        >
          {items}
        </div>
      )}
      {/* react suspence */}
      {/* we will not  get it form the input */}
      {/* before typing this action take palce */}
      <button
        onClick={() => {
          setshow(!show);
        }}
      >
        button
      </button>
      <button
        onClick={() => {
          setshow(false);
        }}
      >
        reset
      </button>

      {/* even we set the button condtion it will import that we can see in the network tab  */}
      {/* for above mentioned quikloading and importing in netowrks problem we can use suspense and lazy loading */}
      {/* wrap the with the suspense component  and in  that wrap it with fall back so when loading it will show that in low network devices */}
      {show && (
        <Suspense fallback={<h1>loading...</h1>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
