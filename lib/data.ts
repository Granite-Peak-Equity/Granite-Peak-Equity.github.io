// Static content: properties + team. Edit here to update the site.

export type Property = {
  name: string;
  loc: string;
  units: number | null;
  type: string;
  built: number | null;
  desc: string;
  /** Placeholder tint for the photo area until a real photo is added. */
  bg: string;
  /**
   * Gallery images shown in the slideshow popup, e.g.
   *   images: ["/uploads/cityview-1.jpg", "/uploads/cityview-2.jpg"]
   * Drop the files in /public/uploads and list them here. When empty, the
   * slideshow shows "Photo Coming Soon" placeholder slides.
   */
  images?: string[];
};

export const PORTFOLIO: Property[] = [
  {
    name: "CityView Central Lofts",
    loc: "Sioux City, Iowa",
    units: 75,
    type: "Historic Conversion",
    built: 1892,
    desc: "CityView Central Lofts is located in central Sioux City, Iowa. It is an iconic 75-unit apartment building originally built as a high school in 1892. First known as \"The High School,\" it has had a few name changes through time. In 1924 it became \"Central High School,\" was remodeled extensively in 1930, and was converted into spacious apartments known as \"Castle on the Hill Apartments\" in 2004. Timeless, quality loft remodelling and improvements continue in 2022, while the building and beautifully landscaped grounds are cherished warmly by Sioux City locals and alumni to this day. A notable pair of its alumni are well known to many as columnists \"Dear Abby\" and \"Ann Landers,\" twins by the given names Pauline and Esther Friedman. The property's beautiful and storied history can be felt as one tours the red sandstone building with its large industrial contemporary style apartments. Sizably grand square footages, open floor plans, and high-quality finishes make these sun-filled lofts a desirable place to live. Located near Sioux City's Hamilton Boulevard, Hard Rock Hotel & Casino, and the famous Historic 4th Street District, CityView Central Lofts is just minutes away from great restaurants, entertainment, nightlife, and employment. Being centrally located, residents enjoy the nearby convenience of any downtown destination. Major employers like MercyOne Medical Center, the Sioux City Convention Center, Tyson Events Center, and County, City, & Federal administrative offices including City Hall, District Courthouse, and Public Library are all close by. Additionally, an under-construction $15MM+ riverfront development on the Missouri River will provide extensive walk and bike paths, trails, and spaces for family gatherings, event spaces, basketball courts, and active recreation lawns.",
    bg: "#1e2c3f",
    images: [
      "/uploads/cityview/CityView10-1.jpg",
      "/uploads/cityview/CityView5.jpg",
      "/uploads/cityview/CityView9.jpg",
      "/uploads/cityview/CityView3-1.jpg",
      "/uploads/cityview/CityView15.jpg",
      "/uploads/cityview/CityView13.jpg",
      "/uploads/cityview/CityView14.jpg",
      "/uploads/cityview/downtown-Sioux-City-pic.jpg",
      "/uploads/cityview/CityView11.jpg",
      "/uploads/cityview/CityView2.jpg",
    ],
  },
  {
    name: "Hons Apartments",
    loc: "Sioux City, Iowa",
    units: 72,
    type: "Class A Mid-Rise",
    built: 1906,
    desc: "Hons Apartments is located in downtown Sioux City, Iowa. The Hons is a 72-unit mid-rise apartment building originally built as a warehouse in 1906 (with the distinction of being the first fireproof building in Iowa) and then completely rehabbed and converted into apartments in 2018. Retaining its historic flair, the Hons is a premier, Class A apartment community located across the street from the Hard Rock Hotel & Casino, a major employer and entertainment destination, and is near other major employers and shopping and dining options in downtown Sioux City. Residents enjoy the ability to walk and bike to any downtown destination, including major employers like MercyOne Medical Center (0.6 miles away), the Sioux City Convention Center (0.7 miles away), Tyson Events Center (0.5 miles away), and County, City, & Federal administrative offices including City Hall, District Courthouse, and Public Library (0.3 miles away). Additionally, an under-construction $15MM+ riverfront development on the Missouri River will provide extensive walk and bike paths, trails, and spaces for family gatherings, event spaces, basketball courts, and active recreation lawns, and is a quick walk (15 minutes) or bike ride (5 minutes) away.",
    bg: "#1a2535",
    images: [
      "/uploads/hons/Hons-Front-From-Street-1024x514.png",
      "/uploads/hons/Hons-Aerial-View.png",
      "/uploads/hons/Hons-Clubhouse.png",
      "/uploads/hons/Hons-Livingroom.png",
      "/uploads/hons/Hons-Livingroom-With-Preserved-Brick-Wall.png",
      "/uploads/hons/Hons-Dining-Room-Livingroom.png",
      "/uploads/hons/Hons-Kitchen.png",
      "/uploads/hons/Hons-Kitchen-3.png",
      "/uploads/hons/Hons-Back-From-Parking-Lot.png",
    ],
  },
  {
    name: "46West",
    loc: "Sioux Falls, South Dakota",
    units: 64,
    type: "Class B Garden Style",
    built: 1977,
    desc: "46West Apartments is located in Sioux Falls, South Dakota. 46West is a 64-unit, low-rise Class B apartment community built in 1977 and well-located in the rapidly growing southwest Sioux Falls submarket. The property is in close proximity to major retail and employment centers including the Western Mall (0.3 miles away), the Empire Mall (1.4 miles away), Augustana University (1.0 miles away), Sanford USD Medical Center (2.5 miles away), Avera Heart Hospital (3.1 miles away), and Downtown Sioux Falls (4.0 miles away). The property's primary competitive advantages are its central location, excellent physical condition, and immediate access to major thoroughfares, including Interstates 229 and 29 (one of Sioux Falls' primary north/south corridors). Improvements include detached garages, secure building access, clothing care centers on every floor, a dog \"bark park,\" a grilling & picnic area, and a well-equipped playground. Half of the 64 residential units have been upgraded with features such as luxury vinyl plank flooring, stainless steel appliances, two-tone paint, resurfaced countertops, and lighting fixtures. Laundry facilities are conveniently located on each floor. Additionally, the property offers residents a choice of five desirable floor plans.",
    bg: "#1e2a3c",
    images: [
      "/uploads/46west/Street-View.jpg",
      "/uploads/46west/Downtown.jpg",
      "/uploads/46west/Falls.jpeg",
      "/uploads/46west/Downtown2.jpg",
      "/uploads/46west/Picture5.jpg",
    ],
  },
  {
    name: "Juniper Canyon",
    loc: "Tucson, Arizona",
    units: 141,
    type: "Garden Style",
    built: 1985,
    desc: "Juniper Canyon Apartments is located in the city of Tucson, Arizona, ideally situated one-quarter mile east of Interstate 10 at the corner of Flowing Wells Road and Miracle Mile. This central location allows for easy access to many employment centers and the downtown area, as well as providing direct access to Phoenix, a 2-hour drive to the north, and to Mexico, 60 miles to the south. The property's proximity to I-10 and excellent frontage on two highly trafficked roadways attracts residents who desire a well-located, convenient, and affordable place to live. Built in 1985, the property is comprised of eight two-story, garden-style residential buildings. Exterior finishes & features include stucco siding, pitched roofs with composition shingles replaced in 2015, a fully automated irrigation system, and a grilling and picnic area. Improvements include market-leading upgraded interiors in 127 of 141 units with highly durable and attractive ceramic tile flooring, a newly renovated resident clubhouse with kitchen, leasing office, fitness center, and laundry facility, as well as a resort-style swimming pool, spa, and a separate storage/maintenance building. The property offers residents a choice of three desirable floor plans.",
    bg: "#243040",
    images: [
      "/uploads/juniper/Juniper-Canyon-31-1-1024x684.jpg",
      "/uploads/juniper/Juniper-Canyon-1-scaled.jpg",
      "/uploads/juniper/Juniper-Canyon-2-scaled.jpg",
      "/uploads/juniper/Juniper-Canyon-4-scaled.jpg",
      "/uploads/juniper/Juniper-Canyon-25-1-scaled.jpg",
      "/uploads/juniper/Juniper-Canyon-26-scaled.jpg",
      "/uploads/juniper/Juniper-Canyon-15-v5-1.jpg",
      "/uploads/juniper/Juniper-Canyon-15-v4-1-scaled.jpg",
    ],
  },
  {
    name: "Burkburnett Residences",
    loc: "Burkburnett, Texas",
    units: null,
    type: "Garden Style",
    built: null,
    desc: "Burkburnett Residences is located in the city of Burkburnett, Texas, adjacent to Wichita Falls on the Red River Expressway, a busy thoroughfare carrying much of the traffic between Sheppard Air Force Base, Wichita Falls, & Burkburnett. The property is located a few blocks from West 3rd Street, the main street through the middle of Burkburnett which is lined with a concentration of retail, banking, & dining. Additionally, Sheppard Air Force Base & Wichita Falls are 6 & 11 minutes away, respectively. Built to maintain its beauty, exterior finishes & features include HardiPlank siding, 30-year architectural roofing, and a fully automated irrigation system. Improvements include a resort-style swimming pool, a clubhouse, fitness center, attached & detached resident garages, covered parking spaces, storage units, and a clothing care center. The property offers an excellent mix of attractive floor plans and large units.",
    bg: "#1a2030",
    images: [
      "/uploads/burkburnett/Pool-Toward-Apartments.jpg",
      "/uploads/burkburnett/Entrance.jpg",
      "/uploads/burkburnett/Burkburnett-Clubhouse-Entrance.jpg",
      "/uploads/burkburnett/Clubhouse.jpg",
      "/uploads/burkburnett/Fitness-Center.jpg",
      "/uploads/burkburnett/Courtyard-Alternate.jpg",
      "/uploads/burkburnett/Drive.jpg",
      "/uploads/burkburnett/Storage-Units-1.jpg",
      "/uploads/burkburnett/20150727_123128-scaled.jpg",
    ],
  },
  {
    name: "River Ranch",
    loc: "Fort Worth, Texas",
    units: null,
    type: "Garden Style",
    built: 1985,
    desc: "River Ranch Apartments is located in the city of River Oaks, Texas, in the heart of the Fort Worth metro area. The property is located on Barbara Road, directly across the street from the newly built A.V. Cato Elementary School. It is situated in a neighborhood setting yet has convenient access to nearby employment and retail centers via easily accessible primary roads. In addition to the elementary school, the property is within walking distance to the middle and high schools as well as to the Trinity River Hike and Bike Trail, a massive publicly funded initiative to preserve the area's natural beauty along and near the Trinity River while providing a catalyst for new business development. Built in 1985, the property is comprised of seven two-story, garden-style residential buildings. Exterior finishes & features include brick veneer and hardboard siding, pitched roofs with composition shingles replaced within the last 3 years, a fully automated irrigation system, and a grilling and picnic area. Improvements include market-leading upgraded interiors with fashionable & durable faux wood flooring, an on-site leasing office/model unit, a clothing care center, and a separate storage/maintenance building. The property offers residents a choice of two attractive floor plans.",
    bg: "#1e2c40",
    images: [
      "/uploads/riverranch/River-Ranch_0210.jpg",
      "/uploads/riverranch/River-Ranch_0134.jpg",
      "/uploads/riverranch/River-Ranch_0167.jpg",
      "/uploads/riverranch/River-Ranch_0171.jpg",
      "/uploads/riverranch/River-Ranch_0178.jpg",
      "/uploads/riverranch/River-Ranch_0211.jpg",
    ],
  },
  {
    name: "Edgewood",
    loc: "Billings, Montana",
    units: null,
    type: "Low-Rise",
    built: null,
    desc: "The Edgewood apartment complex is located in the city of Billings, Montana on Lake Elmo Drive, a busy thoroughfare carrying much of the traffic in the Heights, a desirable residential area. The property is located a few blocks from Main Street / U.S. 87, the main artery through the middle of the Heights which is lined with a concentration of retail, banking, & dining (Wal-Mart Supercenter, Target, Office Depot, CVS, Walgreens, etc.). Additionally, Edgewood is located 4 miles from Logan International Airport & First Interstate Bank's corporate headquarters and 5 miles from Montana State University - Billings. The property consists of wood frame construction with brick and steel siding exteriors. Improvements include a sports court, a children's playground, detached resident garages, three coin-op equipped laundry room facilities, and a maintenance shop. The property offers an excellent mix of attractive floor plans and large units.",
    bg: "#1a2535",
    images: [
      "/uploads/edgewood/Edgewood-Exterior-Sign-1024x575.jpg",
      "/uploads/edgewood/Edgewood-Front-Craigslist.jpg",
      "/uploads/edgewood/Edgewood-Garages.jpg",
      "/uploads/edgewood/Edgewood-2BR-Kitchen-Craigslist.jpg",
      "/uploads/edgewood/Edgewood-3BR-Bath-Craigslist.jpg",
      "/uploads/edgewood/Edgewood-Laundry-Craigslist.jpg",
      "/uploads/edgewood/playground.jpg",
    ],
  },
  {
    name: "Sundial Square",
    loc: "Rapid City, South Dakota",
    units: 63,
    type: "Garden Style",
    built: 1992,
    desc: "Sundial Square Apartments is a 63-unit, low-rise multifamily property located in Rapid City, South Dakota. The property is situated on Waterloo Street, directly across the street from the 28-acre Roosevelt Park with public amenities such as multi-purpose sports courts, basketball courts, baseball fields, playground, indoor swimming pool, indoor ice arena, walking trails, picnic areas, pond, restrooms, and ample open space, as well as a local bus stop. It is centrally located and offers convenient access to nearby employment and retail centers via easily accessible primary roads. Built in 1992, the property is comprised of three three-story, garden-style residential buildings, with one one-bedroom unit being used as an on-site management office. Finishes & features include brick veneer and vinyl siding, pitched roofs with composition shingles, an automated irrigation system, and a sprinkler fire suppression system. Improvements include 31 centrally located garages and 3 clothing care centers. Also included is a 1.95-acre parcel of land adjacent to the property, allowing for future expansion of Sundial Square with 40+ additional units. The property offers residents a choice of five attractive floor plans.",
    bg: "#1e2840",
    images: [
      "/uploads/sundial/Sundial-Exterior-1-1024x768.jpg",
      "/uploads/sundial/Sundial-Exterior-2-scaled.jpg",
      "/uploads/sundial/Sundial-Square-Swim-Center.jpg",
      "/uploads/sundial/Sundial-Square-Park.jpg",
      "/uploads/sundial/Sundial-Bedroom-2-scaled.jpg",
      "/uploads/sundial/Sundial-Bath-1-scaled.jpg",
      "/uploads/sundial/Sundial-Bath-2-scaled.jpg",
    ],
  },
  {
    name: "Grandview Plaza",
    loc: "Great Falls, Montana",
    units: 97,
    type: "Low-Rise",
    built: 1974,
    desc: "Grandview Plaza is a 97-unit, low-rise apartment complex built in 1974 located in Great Falls, Montana. Offering large bedrooms, central heat & air conditioning, and on-site laundry, Grandview Plaza is a practical living solution in Great Falls. Grandview Plaza has a playground for children and is centrally located near Gold's Gym & Holiday Village. With multiple bedroom options, Grandview is an ideal addition to the Southwest Montana Properties portfolio.",
    bg: "#1a2030",
    images: [
      "/uploads/grandview/Grandview-Building.jpg",
      "/uploads/grandview/Grandview-Plaza-Sign-1024x576.jpg",
      "/uploads/grandview/Grandview-Plaza-Office-Approach.jpg",
      "/uploads/grandview/Grandview-Plaza-Gazebo-scaled.jpg",
      "/uploads/grandview/Grandview-Plaza-Park.jpg",
      "/uploads/grandview/20170810_092050-scaled.jpg",
      "/uploads/grandview/20170227_165713-scaled.jpg",
    ],
  },
  {
    name: "Tower Hill",
    loc: "Helena, Montana",
    units: 50,
    type: "Mid-Rise",
    built: 1978,
    desc: "Tower Hill is a 50-unit mid-rise apartment complex built in 1978 located in Helena, Montana. Located in the southeast corner of Montana's capital city, Tower Hill offers affordable living for a range of families as well as young college students, with Carroll College located just 3.5 miles northwest. Tower Hill has modern kitchen appliances, on-site laundry, and convenient balconies perfect for summer BBQs. Offering spacious, comfortable rooms and a vibrant atmosphere where pets are welcomed too, Tower Hill is an ideal asset for Southwest Montana Properties. Being only a 15-minute drive to the several lakes and mountain ranges surrounding Helena, Tower Hill offers an excellent housing solution for its residents.",
    bg: "#1e2c3a",
    images: [
      "/uploads/towerhill/Tower-Hill-Approach.jpg",
      "/uploads/towerhill/Tower-Hill-Courtyard.jpg",
      "/uploads/towerhill/Tower-Hill-Unit-Living-Room.jpg",
      "/uploads/towerhill/Tower-Hill-Unit-Living-Room-2.jpg",
      "/uploads/towerhill/Tower-Hill-Unit-Kitchen.jpg",
      "/uploads/towerhill/Tower-Hill-Unit-Bathroom.jpg",
      "/uploads/towerhill/Tower-Hill-Laundry-Room.jpg",
      "/uploads/towerhill/20200702_152812-scaled.jpg",
    ],
  },
];

export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  /** Path under /public/uploads, or null if a headshot isn't available yet. */
  photo: string | null;
  /** Empty when a bio hasn't been written yet — the card renders photo + title only. */
  bio: string[];
  size: "large" | "small";
};

export const TEAM: TeamMember[] = [
  {
    name: "Chad A. Laird",
    title: "Founder & Managing Director",
    initials: "CL",
    photo: "/uploads/chad-laird.jpg",
    bio: [
      "Chad Laird is the Founder and Managing Director of Granite Peak Equity. Throughout his career, Chad has been involved in the acquisition, operational improvement, and disposition of commercial multifamily properties. Current portfolio includes market rate apartment communities as well as those operating under HUD Project Based Section 8 HAP contract, Section 42 LIHTC contract, and post Section 236 conversion. Passionate for turning around under-performing assets, Granite Peak's current portfolio is largely populated with properties which have become top performers in their asset class. Chad & his team have a track record of regularly growing the NOI of stabilized properties by 50% or more in the first year under their management.",
      "Chad has demonstrated success in the asset management, & conversion of properties operating under HUD HAP contracts & related use agreements. Grandview Plaza is an example of a complex Section 236/Section 8 conversion where in the 18 months following acquisition, economic occupancy rose from less than 85% to greater than 97%, revenue increased more than 50%, operating expense decreased more than 23%, and market value increased by 150%+, all concurrent with the completion of a number of strategic capital intensive projects.",
      "Longstanding strategic alliances with regional & national experts in law, asset management, property management, cost segregation, architecture, planning, construction, and related fields translate into an ability for Chad & his team to maintain consistent performance through widely varied sets of market conditions. Chad actively participates in all acquisition, management, and disposition of Granite Peak assets.",
      "Chad holds a degree in business administration from Cal Poly University, Pomona, is licensed with the Montana Board of Realty Regulation, and is an active member in the Montana Landlord's Association. International business & management experience allows Chad to bring a broad perspective to his various leadership roles. Chad serves as chairman of Newcastle Group, Inc., a corporation that manages several organizations throughout the U.S. that have a private equity and real estate focus.",
    ],
    size: "large",
  },
  {
    name: "Brad Osen",
    title: "Acquisitions & Financial Oversight",
    initials: "BO",
    photo: "/uploads/brad-osen.jpg",
    bio: [
      "With a passion for scouring the real estate landscape for exceptional investment opportunities, Brad is able to leverage his institutional experience with a focus on investor returns that has resulted in many highly successful investments over the years.",
      "Leading the acquisitions effort at Granite Peak Equity, Brad utilizes his investment evaluation skills to find creative solutions to source and acquire multi-family properties that deliver excellent returns for the company's stakeholders. He has been instrumental in acquiring assets in several strategic markets that have successfully generated 20% to 65% average annual ROIs and 18% to 45% IRRs to investors. Brad is also able to put his genuine enjoyment of his peers to good use in partnering with well-established real estate professionals.",
      "Prior to joining Granite Peak Equity, Brad spearheaded the investment analysis and financial reporting of the Yellowstone Club in Big Sky, MT, the world's only private ski and golf community. He evaluated capital deployment decisions on development and operational initiatives and assisted in successfully securing project financing in a challenging lending environment, particularly for speculative multi-million-dollar mountain retreats. His time at YC was highlighted by effectively contributing to the institutional focus of the return on investment by using his analytical, creative, and consensus-building skills to produce great results.",
      'Brad first entered the real estate investment world as a member of the Acquisitions Team for AMB Properties, a publicly traded industrial REIT that later joined with Prologis [NYSE: PLD] in a merger-of-equals in 2011. During his time at AMB, he played a critical role in investing over $180MM and over 2MM square feet on acquisitions of strategically located, class "A" distribution centers located on the eastern seaboard of the United States and Canada. He was actively involved in negotiations, led the underwriting and due diligence efforts, and fostered close relationships with key brokerage communities in multiple East Coast markets.',
      "Brad earned his MBA from Babson College, a globally recognized leader in entrepreneurial studies, and holds an undergraduate degree in business from Montana State University.",
    ],
    size: "large",
  },
  {
    name: "Ileana Scott",
    title: "Regional Property Manager",
    initials: "IS",
    photo: null,
    bio: [],
    size: "small",
  },
  {
    name: "Sally Laird",
    title: "Leasing Center of Excellence Manager",
    initials: "SL",
    photo: "/uploads/sally-laird.png",
    bio: [
      "Sally joined us after a 20 year career with NorthWestern Energy where she worked in Customer Care and the New Construction Department. She is a graduate of The University of Montana Western in Dillon Montana with a BS in Elementary Education. Sally's previous work and life experience have given her the adaptability to jump into any task that crops up. She enjoys the variety of work involved in the Multifamily investment business, working with employees, tenants and investors.",
      "When away from the office, her passions are real estate, antiquing, music of all kinds, her animals, reading, camping and travel.",
    ],
    size: "small",
  },
  {
    name: "Jackie Campbell",
    title: "Administration",
    initials: "JC",
    photo: null,
    bio: [],
    size: "small",
  },
  {
    name: "Connor Erlandson",
    title: "Property Management",
    initials: "CE",
    photo: null,
    bio: [],
    size: "small",
  },
];
