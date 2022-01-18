import './App.css';
import {useState} from 'react';

function App() {
  const [search, setSearch] = useState('');

  const celebrities = [
    {
      name: 'Brad Pitt',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2021%252F03%252F29%252Fbrad-pitt.jpg',
    },
    
    {
      name: 'Chris Evans',
      img: 'https://cdn.britannica.com/28/215028-050-94E9EA1E/American-actor-Chris-Evans-2019.jpg',
    },

    {
      name: 'Hulk Hogan',
      img: 'https://www.biography.com/.image/t_share/MTgwMzE2MTcwODcwNTk3NDg0/gettyimages-542877731.jpg',
    },
  ];

  const filteredCelebrities = celebrities.filter((celebrity) =>
    celebrity.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search your favorite celebrity 🚀</h2>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 5, marginBottom: 10 }}
      />

      <div className="celebrityGrid" style={{ display: 'flex', padding: 2 }}>
        {filteredCelebrities.map((celebrity) => (
          <div>
            <img src={celebrity.img} height="100px" />
            <p style ={{textAlign: 'center'}}>{celebrity.name.split(' ')[0]}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App;
