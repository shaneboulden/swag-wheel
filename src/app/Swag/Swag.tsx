import * as React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardBody,
  CardTitle,
  Drawer,
  DrawerActions,
  DrawerPanelBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelContent,
  DrawerSection,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateSecondaryActions,
  Gallery,
  GalleryItem,
  Grid,
  GridItem,
  PageSection,
  Switch,
  Text,
  TextArea,
  Title
} from '@patternfly/react-core';
import axios from 'axios';
import RedHatLogo from '@app/bgimages/redhat_logo.png';
import QuestionMarkIcon from '@app/bgimages/question-mark.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WheelComponent from 'react-wheel-of-prizes'

const Swag: React.FunctionComponent = () => {

  const [ isDrawerExpanded, setDrawerExpanded ] = React.useState(false);
  const [ text, setText ] = React.useState("")
  const [ questions, setQuestions ] = React.useState([]);
  const [ dataEnc, setDataEnc ] = React.useState(false);

  //React.useEffect(() => {
    //questions-api.blueradish.net/api/questions/clear
  //  axios.get("http://localhost:8080/api/questions/clear")
  //  .then(res => {
  //    setQuestions(res.data);
  //  });
  //});

  //const handleToggleChange = () => {
  //  let url = "";
  //  if(dataEnc) {
  //    url = "http://questions-api.blueradish.net/api/questions/clear";
  //  } else {
  //    url = "http://questions-api.blueradish.net/api/questions/"
  //  }
  //  axios.get(url).then(res => {
  //    setQuestions(res.data);
  //  });
  //  setDataEnc(!dataEnc);
  //};

  const onCloseDrawerClick = () => {
        setDrawwerExpanded(false);
  };

  const onButtonClick = () => {
    setDrawerExpanded(true);
  };

  const handleTextAreaChange = (text) => {
    setText(text);
  }

  const cardStyle = {
    minWidth: "20%",
    minHeight: "10em",
  };

  const textStyle = {
    flexWrap: 'wrap',
    wordWrap: 'break-word'
  }

  const segments = [
    'Wireless mouse',
    'Water bottle',
    'Socks',
    'Power bank',
    'Bouncy ball',
    'Note pad'
  ]
  const segColors = [
    '#EE0000',
    '#D40000',
    '#000000',
    '#6A6E73',
    '#EE0000',
    '#000000',
  ]

  //const segColors = [
  //    '#619A46',
  //    '#D4AF37',
  //    '#619A46',
  //    '#D4AF37',
  //    '#619A46',
  //    '#D4AF37',
 // ]
  const onFinished = (winner) => {
    console.log(winner)
  }

  const swagContent = (
    <React.Fragment>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={1000}
        fontFamily='Arial'
      /> 
    </React.Fragment>
  );

  return (
  <PageSection>
    <Grid>
      <GridItem span={4}></GridItem>
      <GridItem span={8}>{swagContent}</GridItem>
    </Grid>
  </PageSection>
  );
}

export { Swag };
