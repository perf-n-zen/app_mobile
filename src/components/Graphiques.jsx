import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useState } from "react";
import CurveGraphics from "../assets/img/CurveGraphics.svg";
import Logo from "../assets/img/logo.svg";
import { SelectList } from "react-native-dropdown-select-list";
import DropDownPicker from 'react-native-dropdown-picker';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { useEffect } from "react";
// import SelectComponent from "../views/SelectComponent";
// import BarChartView from './BarChartView';

export default function Graphiques() {
  //Button for choose the graph
  const [circle, setCircle] = useState(false);
  const [bar, setBar] = useState(true);

  //Button for choose date
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  console.log("Circle in app : ", circle, " ", "Bar in app ", bar);


  const buttonCirclePress = () => {
    setCircle(true);
    setBar(false); 
  };

  
  const buttonBarPress = () => {
    setCircle(false);
    setBar(true); 
  };

  const handleButton1Press = () => {
    setWeek(true);
    setMonth(false);
    setYear(false);
  };

  const handleButton2Press = () => {
    setWeek(false);
    setMonth(true);
    setYear(false);
  };

  const handleButton3Press = () => {
    setWeek(false);
    setMonth(false);
    setYear(true);
  };

  const Test = () => {
    console.log('test');
  }

  // useEffect(() => {}), [circle, bar];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={50} height={50} style={{ left: "10%" }} />
        <Text style={styles.titleDoc}>Rapport</Text>
        <View style={{borderWidth: 2, borderColor: 'red', width: "35%", height: "100%", zIndex: 2}}>
     <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
  
    />
        </View>
      </View>
      <View style={styles.FirstTitleView}>
        <Text style={styles.txt}>Types de graphique</Text>
      </View>
      <View style={styles.FirstButtonView}>
        <TouchableOpacity
          style={circle === true ? styles.btnTrue : styles.btnFalse}
          value={circle}
          onPress={() => buttonCirclePress ()}
        >
          <Text
            style={circle === true ? styles.txtBtnTrue : styles.txtBtnFalse}
          >
            Cercle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={bar === true ? styles.btnTrue : styles.btnFalse}
          value={bar}
          onPress={() => buttonBarPress() }
        >
          <Text style={bar === true ? styles.txtBtnTrue : styles.txtBtnFalse}>
            Barre
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SecondTitleView}>
        <Text style={styles.txt}>Période</Text>
      </View>
      <View style={styles.SecondButtonView}>
        <TouchableOpacity
          style={week === true ? styles.btnTrue : styles.btnFalse}
          value={week}
          onPress={() =>  handleButton1Press()}
        >
          <Text style={week === true ? styles.txtBtnTrue : styles.txtBtnFalse}>
            Semaine
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        value={month}
          style={month === true ? styles.btnTrue : styles.btnFalse}
          onPress={() => handleButton2Press()}

        >
          <Text style={month === true ? styles.txtBtnTrue : styles.txtBtnFalse}>
            Mois
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        value={year}
        onPress={() => handleButton3Press()}
          style={year === true ? styles.btnTrue : styles.btnFalse}
        >
          <Text style={year === true ? styles.txtBtnTrue : styles.txtBtnFalse}>
            Année
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewSvg}>
        <Text style={{backgroundColor: "red", zIndex: 2 , top: 300}}>BTKDTPETK</Text>
        <CurveGraphics style={styles.curvegraph}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    // borderWidth: 2,
    // borderColor: "yellow",
    backgroundColor: "#2C2B51",
    // zIndex: 1
  },
  titleDoc: {
    color: "#fff",
    fontSize: 30,
  },
  header: {
    top: "15%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderWidth: 2,
    // borderColor: "red",
  },
  FirstTitleView: {
    display: "flex",
    flexDirection: "row",
    top: "15%",
    marginTop: "5%",
    right: "10%",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "green",
  },
  FirstButtonView: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: "15%",
    // borderWidth: 2,
    // borderColor: "grey",
  },
  SecondTitleView: {
    display: "flex",
    flexDirection: "row",
    top: "15%",
    left: "5%",
    // borderWidth: 2,
    // borderColor: "black",
  },
  SecondButtonView: {
    display: "flex",
    flexDirection: "row",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: "15%",
    // borderWidth: 2,
    // borderColor: "yellowgreen",
  },
  btnTrue: {
    width: "30%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#fff",
    backgroundColor: "#2C2B51",
    alignItems: "center",
    justifyContent: "center",
    // zIndex: 1
  },

  btnFalse: {
    width: "30%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#fff",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // zIndex: 1
  },

  txtBtnTrue: {
    color: "#fff",
  },

  txtBtnFalse: {
    color: "#2C2B51",
  },

  txt: {
    color: "#fff",
    fontSize: 20,
  },
  curvegraph: {
    // bottom: "8%",
    // right: "75%",
    // position: "relative",
    // zIndex: -10,
  },
  // containerSvg: {
  //   backgroundColor: "#000",
  //   width: "50%",
  // },
  viewSvg: {
    bottom: "8%",
    right: "75%",
    // position: "relative",
    zIndex: -10,  
  },
  dropdown: {},
});
