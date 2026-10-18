import React from 'react'
import Card from './components/card'


const App = () => {
   const jobs = [
  {
    id: 1,
    brandlogo: "https://i.pinimg.com/736x/c8/f0/b3/c8f0b36bf8e12e0ee14bae0b2b325bc2.jpg",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    brandlogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    company: "Google",
    datePosted: "2 days ago",
    post: "Graphic Designer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Bengaluru, India",
  },
  {
    id: 3,
    brandlogo: "https://www.google.com/s2/favicons?domain=dribbble.com&sz=128",
    company: "Dribbble",
    datePosted: "10 days ago",
    post: "Senior Motion Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Chennai, India",
  },
  {
    id: 4,
    brandlogo: "https://www.google.com/s2/favicons?domain=figma.com&sz=128",
    company: "Figma",
    datePosted: "5 days ago",
    post: "UX Designer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    id: 5,
    brandlogo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    company: "Airbnb",
    datePosted: "3 days ago",
    post: "Junior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Delhi, India",
  },
  {
    id: 6,
    brandlogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    company: "Apple",
    datePosted: "1 day ago",
    post: "Graphic Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Pune, India",
  },
  {
    id: 7,
    brandlogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    company: "Microsoft",
    datePosted: "7 days ago",
    post: "Product Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Noida, India",
  },
  {
    id: 8,
    brandlogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    company: "Spotify",
    datePosted: "4 days ago",
    post: "Junior Brand Designer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Mumbai, India",
  },
  {
    id: 9,
    brandlogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    company: "Netflix",
    datePosted: "6 days ago",
    post: "Senior Visual Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Gurugram, India",
  },
  {
    id: 10,
    brandlogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    company: "Adobe",
    datePosted: "12 days ago",
    post: "Junior UX Researcher",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Bhopal, India",
  },
];

  return (
    <div className="parent">
          {jobs.map(function(elem){
              return <Card company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandlogo={elem.brandlogo}/>
          })}
    </div>
  )
}


export default App