const showMoreInfo = document.getElementById('showMoreInfo');
const slider = document.getElementById('slider');

const friendsShowMoreInfo = document.getElementById('friends-showMore-info');
const friendsSlider = document.getElementById('friends-slider');

const groupsShowMoreInfo = document.getElementById('groups-showMore-info');
const groupsSlider = document.getElementById('groups-slider');

const photosShowMoreInfo = document.getElementById('photos-showMore-info');
const photosSlider = document.getElementById('photos-slider');

showMoreInfo.addEventListener('click', () => {
  if (slider.classList.contains("slideup")) 
  {
    slider.classList.remove("slideup");
    slider.classList.add("slidedown");
    showMoreInfo.classList.remove("fa-chevron-down");
    showMoreInfo.classList.add("fa-chevron-up");
  } else {
    slider.classList.remove("slidedown");
    slider.classList.add("slideup");
    showMoreInfo.classList.remove("fa-chevron-up");
    showMoreInfo.classList.add("fa-chevron-down");
  } 
});

friendsShowMoreInfo.addEventListener('click', () => {
  if (friendsSlider.classList.contains("friends-slideup")) 
  {
    friendsSlider.classList.remove("friends-slideup");
    friendsSlider.classList.add("friends-slidedown");
    friendsShowMoreInfo.classList.remove("fa-chevron-down");
    friendsShowMoreInfo.classList.add("fa-chevron-up");
  } else {
    friendsSlider.classList.remove("friends-slidedown");
    friendsSlider.classList.add("friends-slideup");
    friendsShowMoreInfo.classList.remove("fa-chevron-up");
    friendsShowMoreInfo.classList.add("fa-chevron-down");
  } 
});

groupsShowMoreInfo.addEventListener('click', () => {
  if (groupsSlider.classList.contains("groups-slideup")) 
  {
    groupsSlider.classList.remove("groups-slideup");
    groupsSlider.classList.add("groups-slidedown");
    groupsShowMoreInfo.classList.remove("fa-chevron-down");
    groupsShowMoreInfo.classList.add("fa-chevron-up");
  } else {
    groupsSlider.classList.remove("groups-slidedown");
    groupsSlider.classList.add("groups-slideup");
    groupsShowMoreInfo.classList.remove("fa-chevron-up");
    groupsShowMoreInfo.classList.add("fa-chevron-down");
  } 
});

photosShowMoreInfo.addEventListener('click', () => {
  if (photosSlider.classList.contains("photos-slideup")) 
  {
    photosSlider.classList.remove("photos-slideup");
    photosSlider.classList.add("photos-slidedown");
    photosShowMoreInfo.classList.remove("fa-chevron-down");
    photosShowMoreInfo.classList.add("fa-chevron-up");
  } else {
    photosSlider.classList.remove("photos-slidedown");
    photosSlider.classList.add("photos-slideup");
    photosShowMoreInfo.classList.remove("fa-chevron-up");
    photosShowMoreInfo.classList.add("fa-chevron-down");
  } 
});