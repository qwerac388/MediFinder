import styles from "../App.module.css";

//red text for waitTime above 2hrs
export const isWaitTimeOverTwoHours = (waitTime) => {
  // This regular expression matches "超過" followed by one or more digits and then "小時"
  const overHoursRegex = /超過\s*(\d+)\s*小時/;
  const match = waitTime.match(overHoursRegex);

  if (match) {
    // Extract the number and convert it to an integer
    const hours = parseInt(match[1], 10);
    // Check if the extracted hours are greater than or equal to 2
    return hours >= 2;
  }

  return false;
};

//ServicePage district color function
export function districtColor(obj) {
  if (obj.hospital.district === "港島") {
    return "hkisland";
  }
  if (obj.hospital.district === "九龍") {
    return "kowloon";
  }
  if (obj.hospital.district === "新界") {
    return "newterr";
  }
}

//Distance page slider setting
export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
//DistancePage district Color
export function districtColor2(district) {
  if (district === "港島") {
    return styles.hkisland;
  }
  if (district === "九龍") {
    return styles.kowloon;
  }
  if (district === "新界") {
    return styles.newterr;
  }
  return ""; // Return an empty string or some default class if district doesn't match
}

//ServicePage 分科服務
export const hospitalSpecialistServices = [
  {
    name: "靈實醫院",
    district: "九龍",
    type: "九龍東醫院聯網",
    contact: "2703 8888",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100157&Lang=CHIB5",
    address: "將軍澳靈實路8號",
    specialistServices: {
      內科: 1,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 0,
      骨科: 0,
      紓緩醫學科: 1,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.313773,
    longitude: 114.25627,
    img: "https://d5ttlem47o98b.cloudfront.net/s3fs-public/styles/banner/public/2022-04/WhatsApp%20Image%202022-04-03%20at%204.30.04%20PM.jpeg?itok=2F0cxL2h",
  },
  {
    name: "基督教聯合醫院",
    district: "九龍",
    type: "九龍東醫院聯網",
    contact: "2379 9611",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100156&Lang=CHIB5",
    address: "九龍觀塘協和街130號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 0,
      眼科: 1,
      耳鼻喉科: 0,
      神經外科: 1,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 1,
      婦科: 1,
      產科: 1,
      兒科: 1,
      牙科: 1,
    },
    latitude: 22.322291,
    longitude: 114.2279,
    img: "https://www.ha.org.hk/haho/ho/kec/v3/images/img_clusters_uch.jpg",
  },

  {
    name: "仁濟醫院",
    district: "九龍",
    type: "九龍西醫院聯網",
    contact: "2417 8383",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100165&Lang=CHIB5",
    address: "新界荃灣仁濟街7-11號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 1,
      神經外科: 0,
      精神科: 0,
      骨科: 1,
      紓緩醫學科: 1,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.369548,
    longitude: 114.11956,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzIT9CJ-bMGaFeqkZ9Tf2hI2uvJkqAZal7A&usqp=CAU",
  },
  {
    name: "將軍澳醫院",
    district: "九龍",
    type: "九龍東醫院聯網",
    contact: "2208 0111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=101326&Lang=CHIB5",
    address: "將軍澳坑口寶寧里2號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 1,
      耳鼻喉科: 1,
      神經外科: 0,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 1,
      婦科: 1,
      產科: 1,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.317964,
    longitude: 114.27021,
    img: "https://cdn.hk01.com/di/media/images/4312888/org/5bcb108cf86850ecc742891b5c3057d9.jpg/WKHhU4OZsTyUwjtrLT2t3WXEn4eY7yHoKwQ9FQ0EPRU?v=w1920",
  },
  {
    name: "東華醫院",
    district: "港島",
    type: "港島西醫院聯網",
    contact: "2589 8111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100134&Lang=CHIB5",
    address: "香港上環普仁街12號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 1,
      神經外科: 0,
      精神科: 0,
      骨科: 0,
      紓緩醫學科: 0,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.284955,
    longitude: 114.14661,
    img: "https://www.ha.org.hk/haho/ho/hkwc/v3/images/img_clusters_twh.jpg",
  },
  {
    name: "東華東院",
    district: "港島",
    type: "港島東醫院聯網",
    contact: "2162 6888",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100145&Lang=CHIB5",
    address: "香港銅鑼灣東院道19號",
    specialistServices: {
      內科: 1,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 1,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 0,
      骨科: 0,
      紓緩醫學科: 0,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.274725,
    longitude: 114.19026,
    img: "https://www.ha.org.hk/haho/ho/hkec/v3/images/img_clusters_tweh.jpg",
  },
  {
    name: "屯門醫院",
    district: "新界",
    type: "新界西醫院聯網",
    contact: "2468 5111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100173&Lang=CHIB5",
    address: "新界屯門青松觀路廿三號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 1,
      麻醉科: 0,
      臨床腫瘤科: 1,
      眼科: 0,
      耳鼻喉科: 1,
      神經外科: 1,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 1,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.40708,
    longitude: 113.97621,
    img: "https://www.ha.org.hk/haho/ho/ntwc/v3/images/img_clusters_tmh.jpg",
  },
  {
    name: "大口環根德公爵夫人兒童醫院",
    district: "港島",
    type: "港島西醫院聯網",
    contact: "2817 7111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100137&Lang=CHIB5",
    address: "香港薄扶林大口環道12號",
    specialistServices: {
      內科: 1,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 0,
      骨科: 1,
      紓緩醫學科: 1,
      婦科: 0,
      產科: 0,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.271574,
    longitude: 114.12424,
    img: "https://www.ha.org.hk/haho/ho/hkwc/v3/images/img_clusters_dkch.jpg",
  },
  {
    name: "贊育醫院",
    district: "港島",
    type: "港島西醫院聯網",
    contact: "2589 2100",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100133&Lang=CHIB5",
    address: "香港西營盤醫院道30號",
    specialistServices: {
      內科: 1,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 1,
      骨科: 0,
      紓緩醫學科: 1,
      婦科: 1,
      產科: 1,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.286146,
    longitude: 114.14457,
    img: "https://s.yimg.com/ny/api/res/1.2/BC0cAPTBQgBpnCs4q3nb8w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTUxMg--/https://media.zenfs.com/en_us/News/singtao/20180208a103909.jpg",
  },
  {
    name: "天水圍醫院",
    district: "新界",
    type: "新界西醫院聯網",
    contact: "3513 5000",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=235909&Lang=CHIB5",
    address: "新界天水圍天壇街11號",
    specialistServices: {
      內科: 1,
      外科: 0,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 0,
      骨科: 1,
      紓緩醫學科: 1,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.458704,
    longitude: 113.99585,
    img: "https://www.ha.org.hk/haho/ho/ntwc/v3/images/img_clusters_tswh.jpg",
  },
  {
    name: "伊利沙伯醫院",
    district: "九龍",
    type: "九龍中醫院聯網",
    contact: "3506 8888",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100149&Lang=CHIB5",
    address: "九龍加士居道30號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 1,
      麻醉科: 1,
      臨床腫瘤科: 1,
      眼科: 0,
      耳鼻喉科: 1,
      神經外科: 1,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 1,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.30886,
    longitude: 114.17519,
    img: "https://image.stheadline.com/f/1500p0/0x0/100/none/b0fd86f1488f6e0fd765dda3353fe7ad/stheadline/inewsmedia/20210111/_2021011120121394173.jpeg",
  },
  {
    name: "瑪麗醫院",
    district: "港島",
    type: "港島西醫院聯網",
    contact: "2255 3838",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100131&Lang=CHIB5",
    address: "香港薄扶林道102號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 1,
      麻醉科: 1,
      臨床腫瘤科: 1,
      眼科: 0,
      耳鼻喉科: 1,
      神經外科: 1,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 1,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.2704,
    longitude: 114.13117,
    img: "https://www.ha.org.hk/haho/ho/hkwc/v3/images/img_clusters_qmh.jpg",
  },
  {
    name: "律敦治醫院",
    district: "港島",
    type: "港島東醫院聯網",
    contact: "2291 2000",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100144&Lang=CHIB5",
    address: "香港灣仔皇后大道東266號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 1,
      神經外科: 0,
      精神科: 0,
      骨科: 1,
      紓緩醫學科: 1,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.275909,
    longitude: 114.17529,
    img: "https://www.ha.org.hk/haho/ho/hkec/v3/images/img_clusters_rh.jpg",
  },
  {
    name: "威爾斯親王醫院",
    district: "新界",
    type: "新界東醫院聯網",
    contact: "3505 2211",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100166&Lang=CHIB5",
    address: "新界沙田銀城街30-32號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 1,
      眼科: 1,
      耳鼻喉科: 1,
      神經外科: 1,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 1,
      婦科: 1,
      產科: 1,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.379939,
    longitude: 114.20129,
    img: "https://www.freeguider.com/upload/venues/989/big/3f2e87471ff18f1b2719355f8a4d560c.jpg",
  },
  {
    name: "北大嶼山醫院",
    district: "新界",
    type: "九龍西醫院聯網",
    contact: "3467 7000",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=216546&Lang=CHIB5",
    address: "大嶼山東涌松仁路8號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 0,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.282571,
    longitude: 113.93914,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/North_Lantau_Hospital.jpg/2880px-North_Lantau_Hospital.jpg",
  },
  {
    name: "聖母醫院",
    district: "九龍",
    type: "九龍中醫院聯網",
    contact: "2320 2121",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100155&Lang=CHIB5",
    address: "九龍黃大仙沙田坳道118號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 1,
      神經外科: 0,
      精神科: 0,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 0,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.345588,
    longitude: 114.19657,
    img: "https://www.ha.org.hk/haho/ho/kcc/v3/images/img_clusters_olmh.jpg",
  },
  {
    name: "東區尤德夫人那打素醫院",
    district: "港島",
    type: "港島東醫院聯網",
    contact: "2595 6111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100141&Lang=CHIB5",
    address: "香港柴灣樂民道3號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 1,
      眼科: 1,
      耳鼻喉科: 1,
      神經外科: 1,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 1,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.26918,
    longitude: 114.23643,
    img: "https://www.freeguider.com/upload/venues/987/big/2e88fa82d79156fed2ae749e19de6d72.JPG",
  },
  {
    name: "博愛醫院",
    district: "新界",
    type: "新界西醫院聯網",
    contact: "2486 8000",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100174&Lang=CHIB5",
    address: "新界元朗坳頭",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 1,
      耳鼻喉科: 1,
      神經外科: 0,
      精神科: 0,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.44523,
    longitude: 114.04159,
    img: "https://www.freeguider.com/upload/venues/1551/big/785deaecc826fd74f16777d3976e4120.JPG",
  },
  {
    name: "廣華醫院",
    district: "九龍",
    type: "九龍中醫院聯網",
    contact: "2332 2311",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100153&Lang=CHIB5",
    address: "九龍窩打老道25號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 1,
      神經外科: 1,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 1,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.315174,
    longitude: 114.17244,
    img: "https://cdn.hk01.com/di/media/images/664471/org/d71fe9a19dccb760580bf8ea3f2f731e.jpg/Yiu901rdXxWq-sLjedaLoOf1qf2_EZ0hybIK4cmyCuE?v=w1920",
  },
  {
    name: "香港佛教醫院",
    district: "九龍",
    type: "九龍中醫院聯網",
    contact: "2339 6111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100152&Lang=CHIB5",
    address: "九龍樂富杏林街10號",
    specialistServices: {
      內科: 1,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 0,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.33568,
    longitude: 114.18874,
    img: "https://cdn.hk01.com/di/media/images/dw/20210107/423898429744222208285719.jpeg/S_xg5f8IwI06VEmlag0vI4v_9wQ_r0P1VePFvVXjxb0?v=w1920",
  },
  {
    name: "青山醫院",
    district: "新界",
    type: "新界西醫院聯網",
    contact: "2456 7111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100176&Lang=CHIB5",
    address: "新界屯門青松觀路15號",
    specialistServices: {
      內科: 0,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 1,
      骨科: 0,
      紓緩醫學科: 0,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.410011,
    longitude: 113.97374,
    img: "https://resource01-proxy.ulifestyle.com.hk/res/v3/image/content/2355000/2357390/20190524JHC003__20190524_L.jpg",
  },
  {
    name: "沙田慈氏護養院",
    district: "新界",
    type: "新界東醫院聯網",
    contact: "2636 7288",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100169&Lang=CHIB5",
    address: "新界沙田亞公角山路30號",
    specialistServices: {
      內科: 0,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 0,
      骨科: 0,
      紓緩醫學科: 0,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.39918,
    longitude: 114.21653,
    img: "https://obs.line-scdn.net/0hMbuqXVDNEk1ICD60JQdtGnJeESJ7ZAFOLD5DUhdmTHk1MAEcdWpUeGQOSHxha1UTIW5dKGsMCXxjbQUScmtU/w644",
  },
  {
    name: "明愛醫院",
    district: "九龍",
    type: "九龍西醫院聯網",
    contact: "3408 5678",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100163&Lang=CHIB5",
    address: "九龍深水埗永康街111號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 0,
      眼科: 1,
      耳鼻喉科: 1,
      神經外科: 0,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 0,
      兒科: 1,
      牙科: 1,
    },
    latitude: 22.340629,
    longitude: 114.15231,
    img: "https://www.ha.org.hk/haho/ho/kwc/v3/images/img_clusters_cmc.jpg",
  },
  {
    name: "雅麗氏何妙齡那打素醫院",
    district: "新界",
    type: "新界東醫院聯網",
    contact: "2689 2000",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100171&Lang=CHIB5",
    address: "新界大埔全安路11號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 0,
      眼科: 1,
      耳鼻喉科: 1,
      神經外科: 0,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 0,
      兒科: 1,
      牙科: 0,
    },
    latitude: 22.458696,
    longitude: 114.17479,
    img: "https://www.careheart.org.hk/wordpress/wp-content/uploads/2019/02/20190131-1.png",
  },
  {
    name: "葛量洪醫院",
    district: "港島",
    type: "港島西醫院聯網",
    contact: "2518 2111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100139",
    address: "香港仔黃竹坑道125號",
    specialistServices: {
      內科: 0,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 1,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 0,
      骨科: 0,
      紓緩醫學科: 1,
      婦科: 0,
      產科: 0,
      兒科: 0,
      牙科: 0,
    },
    latitude: 22.251156,
    longitude: 114.17316,
    img: "https://www.ha.org.hk/haho/ho/hkwc/v3/images/img_clusters_gh.jpg",
  },
  {
    name: "瑪嘉烈醫院",
    district: "九龍",
    type: "九龍西醫院聯網",
    contact: "2990 1111",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100160&Lang=CHIB5",
    address: "九龍荔枝角瑪嘉烈醫院道2-10號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 1,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 1,
      精神科: 0,
      骨科: 1,
      紓緩醫學科: 1,
      婦科: 1,
      產科: 1,
      牙科: 0,
    },
    latitude: 22.340057,
    longitude: 114.1347,
    img: "https://stream.881903.com/public/c4665a6bc1a3b1f9121c47386e8c73e8/2021/03/fd42876c82f1c8c839b89c68a060b2cc.jpg",
  },
  {
    name: "北區醫院",
    district: "新界",
    type: "新界東醫院聯網",
    contact: "2683 8888",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100178&Lang=CHIB5",
    address: "新界上水保健路9號",
    specialistServices: {
      內科: 1,
      外科: 1,
      心胸外科: 0,
      麻醉科: 1,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 1,
      骨科: 1,
      紓緩醫學科: 0,
      婦科: 1,
      產科: 0,
      牙科: 0,
    },
    latitude: 22.496832,
    longitude: 114.12456,
    img: "https://tendervoice.hospitalchap.org.hk/wp-content/uploads/2008/05/north.jpg",
  },
  {
    name: "長洲醫院",
    district: "港島",
    type: "港島東醫院聯網",
    contact: "2986 2100",
    website:
      "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=100146&Lang=CHIB5",
    address: "長洲東灣長洲醫院路",
    specialistServices: {
      內科: 0,
      外科: 0,
      心胸外科: 0,
      麻醉科: 0,
      臨床腫瘤科: 0,
      眼科: 0,
      耳鼻喉科: 0,
      神經外科: 0,
      精神科: 0,
      骨科: 0,
      紓緩醫學科: 0,
      婦科: 0,
      產科: 0,
      牙科: 0,
    },
    latitude: 22.208059,
    longitude: 114.03151,
    img: "https://had18.huluhk.org/uploadedFile/563531471552969450.jpg",
  },
];

export const hospitalGoogleIframeLink = [
  {
    NAME_TC: "仁濟醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59033.0952129059!2d114.04738722167967!3d22.369918000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8ed283c0519%3A0xc54f8f3cd89808d1!2z5LuB5r-f6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704057991555!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "瑪嘉烈醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.324816582479!2d114.13124637529371!3d22.341360979657203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8adc11ee0e1%3A0xff4432d1a9b0279a!2z6JG15raM55Gq5ZiJ54OI6Yar6Zmi6LevMi0xMOiZn-eRquWYieeDiOmGq-mZog!5e0!3m2!1szh-TW!2shk!4v1704058066615!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "明愛醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2185.6525391204996!2d114.15185805142919!3d22.340832664911655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040751714c9edb%3A0xc485a03b484c400d!2z5piO5oSb6Yar6ZmiIC0g5oe35piO5qiTIEcvRuWwiOenkemWgOiouumDqOWAmeiouuWNgA!5e0!3m2!1szh-TW!2shk!4v1704048354934!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "威爾斯親王醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.3074561339213!2d114.19933127504684!3d22.379763979629512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404065040d39629%3A0x64a58d9847b993cd!2z5aiB54i-5pav6Kaq546L6Yar6Zmi5oCl55eH5a6k!5e0!3m2!1szh-TW!2shk!4v1704048409723!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "廣華醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0574830371124!2d114.16856907504474!3d22.313665679676962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c6be756d77%3A0x328144aee16167c9!2z5buj6I-v6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048435554!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "博愛醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5670425216535!2d114.0390459250489!3d22.44531602958254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0a948ba6819%3A0xee4fad893ad00027!2z5Y2a5oSb6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048457465!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "伊利沙伯醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.189084954147!2d114.17248807504455!3d22.308687579680555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c26b2871b5%3A0xe0cd63796b5dfdaa!2z5LyK5Yip5rKZ5Lyv6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048484306!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "雅麗氏何妙齡那打素醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.2132186941603!2d114.17207712504928!3d22.45862047957302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404084e98b0074d%3A0xc15bfe87af267518!2z6ZuF6bqX5rCP5L2V5aaZ6b2h6YKj5omT57Sg6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048512513!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "瑪麗醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846.1028308213374!2d114.12984703859738!3d22.270197994927067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ffed4ec4217f%3A0xa021414a22bbb4e0!2z55Gq6bqX6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048550856!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "北區醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.195961403408!2d114.12202217505049!3d22.496829729545713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f615c7a4950b%3A0x1fae11530375607c!2z5YyX5Y2A6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048577097!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "律敦治醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.0523179498286!2d114.17278612504367!3d22.276007929704097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005b157c8131%3A0x5cec98f63ff40420!2z5b6L5pWm5rK76Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048600134!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "基督教聯合醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.813395493696!2d114.22461407504505!3d22.322895979670296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406ad58aab66b%3A0xb10e3fa4a2ef0fac!2z5Z-6552j5pWZ6IGv5ZCI6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048617802!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "屯門醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.5574874723693!2d113.97365712504772!3d22.40803357960921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403fade2d37716d%3A0xe7c6554364c86bd4!2z5bGv6ZaA6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048637325!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "天水圍醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.2141564093463!2d113.99315607504931!3d22.458585229573153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0634aec8581%3A0x7ff2aa8ab865353f!2z5aSp5rC05ZyN6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048655767!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "東區尤德夫人那打素醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.214502661844!2d114.23288962504354!3d22.26986297970853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401872071aac7%3A0xc7ab9f250e38d101!2z5p2x5Y2A5bCk5b635aSr5Lq66YKj5omT57Sg6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048679579!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "將軍澳醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.948681112506!2d114.26743487504493!3d22.317780529673946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404047666dc1a6f%3A0xd8b1fc68e2d491b1!2z5bCH6LuN5r6z6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048696794!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "北大嶼山醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8933859226877!2d113.93669577504377!3d22.282028079699682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2a68b5cdc3f%3A0x8232e71cafed00be!2z5YyX5aSn5ba85bGx6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048714244!5m2!1szh-TW!2shk",
  },
  {
    NAME_TC: "長洲醫院",
    googleIframeLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.8713508972237!2d114.02782632504149!3d22.206994879753754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3401568e03ecc7bb%3A0x635158043e206f64!2z6ZW35rSy6Yar6Zmi!5e0!3m2!1szh-TW!2shk!4v1704048731498!5m2!1szh-TW!2shk",
  },
];

export const hongKongDistricts = [
  "中西區",
  "灣仔區",
  "東區",
  "南區",
  "油尖旺區",
  "深水埗區",
  "九龍城區",
  "黃大仙區",
  "觀塘區",
  "葵青區",
  "荃灣區",
  "屯門區",
  "元朗區",
  "北區",
  "大埔區",
  "西貢區",
  "沙田區",
  "離島區",
];

//General Page districtcolor
//18區顏色
export function districtColor3(District) {
  if (
    District === "中西區" ||
    District === "灣仔區" ||
    District === "東區" ||
    District === "南區"
  ) {
    return styles.hkisland;
  }

  if (
    District === "黃大仙區" ||
    District === "油尖旺區" ||
    District === "深水埗區" ||
    District === "九龍城區" ||
    District === "觀塘區"
  ) {
    return styles.kowloon;
  }

  if (
    District === "新界" ||
    District === "葵青區" ||
    District === "荃灣區" ||
    District === "屯門區" ||
    District === "元朗區" ||
    District === "北區" ||
    District === "大埔區" ||
    District === "西貢區" ||
    District === "沙田區" ||
    District === "離島區"
  ) {
    return styles.newterr;
  }

  //  return a default class
  return styles.districts;
}
