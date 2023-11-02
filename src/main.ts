import './style.css';
import { getBoredActivity } from './boredActivity';
import { getImage } from './apiImage';


document.getElementsByTagName('form')[0].addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = await getBoredActivity();
  const image = await getImage(data.type);
  document.getElementById('activity')!.style.display = 'block';
  document.getElementById('activity-value')!.innerHTML = data.activity;
  document.getElementById('type-value')!.innerHTML = data.type;
  document.getElementById('participants-value')!.innerHTML = data.participants.toString();
  document.getElementById('price-value')!.innerHTML = data.price.toString();
  document.getElementById('accessibility-value')!.innerHTML = data.accessibility.toString() ?? "";
  if (image && image.photos.length > 0) {
    document.getElementById('image')!.setAttribute('src', image.photos[0].src.medium);
  }
});
