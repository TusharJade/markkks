import "./styles.css";

var location = {
  UttarPradesh: [
    {
      Name: "Taj Mahal",
      Description:
        "It is a place where every Indian want to visit ones in there life and its also a place of one of the 7 wonders of world.",
      Rating: "5/5"
    },
    {
      Name: "Mathura",
      Description:
        "This is holy place fot me and all hindus, it is a bithplace of The lord Krishna.",
      Rating: "5/4.5"
    },
    {
      Name: "Ayodhya",
      Description:
        "Ayodhya, this is also a holy place for all Hindus. This is a bithplace of 'Prabhu Shree Ram'.",
      Rating: "5/5"
    }
  ],

  Maharashtra: [
    {
      Name: "Mahabaleshwar",
      Description:
        "Mahabaleshwar is a hill station located in Satara district. Pratapgad forst is also so famous and it is near Mahabakeshwar.",
      Rating: "5/4"
    },
    {
      Name: "Ajanta and Ellora caves",
      Description:
        "Ajanta caves is conside as one of the finest example of ancient-rock cut caves. This caves has beautiful sculptures, painting, etc.",
      Rating: "5/5"
    },
    {
      Name: "Alibaug",
      Description:
        "Alibaug is a small costal town in the Kokan region of Maharashtra it is known for beaches, villas,etc.",
      Rating: "5/4.5"
    }
  ],
  Jammuandkashmir: [
    {
      Name: "Srinagar-Heaven on earth",
      Description:
        "Srinagar is one of the most beautiful places to visit in Kashmir. From boating to trekking, bird watching to water skiing, Srinagar place has it all. Locally this place is known as the mirror to the mountains",
      Rating: "5/5"
    },
    {
      Name: "Kargil",
      Description:
        "Kargil is a small town in the Kargil district of Ladakh region, which brings shivers down the spine of the Indian Citizens. This part of the Ladakh is a must visit for every first time traveler for capturing the undaunted beauty of the place.",
      Rating: "5/5"
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <h2 className="heading">Travel recommendations</h2>

      <p className="para">
        Here are some of my favorite places which I visited.
      </p>
    </div>
  );
}
