import React, { Fragment, useState } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import HeaderCard from '../../Common/Component/HeaderCard';
// import FooterCard from 'Common/FooterCard';
import HeaderCard from '../Common/Component/HeaderCard';
import FooterCard from '../Forms/FormControl/Common/FooterCard';

const VoterSurveyForm = () => {
    // State variabless
    const [party, setParty] = useState('');
    const [voteReason, setVoteReason] = useState('');
    const [qualities, setQualities] = useState([]);
    const [supportCandidate, setSupportCandidate] = useState('');
    const [satisfiedWithMLAMP, setSatisfiedWithMLAMP] = useState('');
    const [partyApproach, setPartyApproach] = useState('');
    const [reachMethods, setReachMethods] = useState([]);
    const [believeInChange, setBelieveInChange] = useState('');
    const [localIssue, setLocalIssue] = useState([]);
    const [mlaPerformance, setMlaPerformance] = useState('');

    // Helper for multi-select toggle
    const handleToggle = (value, list, setList) => {
        if (list.includes(value)) {
            setList(list.filter((item) => item !== value));
        } else {
            setList([...list, value]);
        }
    };

    // Options
    const partyOptions = ['தி.மு.க', 'அ.தி.மு.க', 'பா.ஜ.க', 'கா.க', 'நாம் தமிழர்', 'மற்றவை'];
    const voteOptions = ['வேட்பாளர் பெயரை பார்த்து', 'கட்சியை வைத்து', 'இன்னும் தீர்மானிக்கவில்லை', 'வாக்களிக்கப் போவதில்லை'];
    const qualityOptions = ['கல்வியுள்ளவர்', 'எளிதில் அணுகக்கூடியவர்', 'நேர்மையானவர்', 'உள்ளூரில் செயல்படுபவர்', 'ஊழலில்லாதவர்'];
    const supportCandidateOptions = ['ஆம்', 'இல்லை', 'யோசித்து சொல்கிறேன்'];
    const mlampOptions = ['ஆம்', 'இல்லை'];
    const partyApproachOptions = ['ஆம்', 'இல்லை', 'தேர்தலின்போது மட்டும்'];
    const reachMethodOptions = ['வீடு வீடாக வருகை', 'வாட்ஸ்அப் / எஸ்எம்எஸ்', 'தொலைபேசி அழைப்பு', 'பொதுக் கூட்டம்', 'சமூக ஊடகம் (Social Media)'];
    const believeChangeOptions = ['ஆம்', 'இல்லை', 'நிச்சயமில்லை'];
    const localIssueOptions = ['குடிநீர்', 'சாலை / வழிகால்', 'வேலைவாய்ப்பு இல்லாமை', 'ஊழல்', 'மின்சாரம்', 'பெண்களின் பாதுகாப்பு', 'கல்வி', 'பிறவை'];
    const mlaPerformanceOptions = ['ஆம்', 'இல்லை', 'சில அளவுக்கு', 'தெரியவில்லை'];

    return (
        <Fragment>
            <Card>
                <HeaderCard title="வாக்காளர் கருத்துக்கணிப்பு கேள்விகள்" />
                <Form className="form theme-form">
                    <CardBody>
                        {/* Basic Fields */}
                        {['Your Name', 'Your Mobile Number', 'Your Age', 'Your City/Village', 'Your Voter ID'].map(label => (
                            <Row key={label}><Col><FormGroup><Label>{label}</Label><Input type="text" placeholder={`Enter ${label}`} /></FormGroup></Col></Row>
                        ))}

                        {/* All Questions Below */}
                        <Row><Col><FormGroup><Label>சாதாரணமாக நீங்கள் எந்த கட்சியை ஆதரிக்கிறீர்கள்?</Label><div className="d-flex flex-wrap gap-2">{partyOptions.map(option => (<Button key={option} color={party === option ? 'primary' : 'light'} onClick={() => setParty(option)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>வரும் 2026 தேர்தலில் நீங்கள் யாருக்கு வாக்களிக்க இருக்கிறீர்கள்?</Label><div className="d-flex flex-wrap gap-2">{voteOptions.map(option => (<Button key={option} color={voteReason === option ? 'primary' : 'light'} onClick={() => setVoteReason(option)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>ஒரு சிறந்த வேட்பாளரிடம் நீங்கள் எதிர்பாருக்கும் முக்கிய பண்புகள் என்ன?</Label><div className="d-flex flex-wrap gap-2">{qualityOptions.map(option => (<Button key={option} color={qualities.includes(option) ? 'primary' : 'light'} onClick={() => handleToggle(option, qualities, setQualities)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>நல்ல வேட்பாளரை ஆதரிக்க தயார் உள்ளீர்களா?</Label><div className="d-flex flex-wrap gap-2">{supportCandidateOptions.map(option => (<Button key={option} color={supportCandidate === option ? 'primary' : 'light'} onClick={() => setSupportCandidate(option)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>உங்கள் பகுதியில் உள்ள MLA அல்லது MP-இன் செயல்பாடு மீது நீங்கள் திருப்தியா?</Label><div className="d-flex flex-wrap gap-2">{mlampOptions.map(option => (<Button key={option} color={satisfiedWithMLAMP === option ? 'primary' : 'light'} onClick={() => setSatisfiedWithMLAMP(option)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>கடந்த தேர்தலுக்குப் பிறகு ஏதேனும் ஒரு கட்சி உங்களை தொடர்புகொண்டதா?</Label><div className="d-flex flex-wrap gap-2">{partyApproachOptions.map(option => (<Button key={option} color={partyApproach === option ? 'primary' : 'light'} onClick={() => setPartyApproach(option)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>வேட்பாளர்கள் உங்களிடம் தொடர்பு கொள்ள எந்த முறையை நீங்கள் விரும்புகிறீர்கள்?</Label><div className="d-flex flex-wrap gap-2">{reachMethodOptions.map(option => (<Button key={option} color={reachMethods.includes(option) ? 'primary' : 'light'} onClick={() => handleToggle(option, reachMethods, setReachMethods)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>உங்கள் ஓட்டு மாற்றத்தை உருவாக்கும் என நம்புகிறீர்களா?</Label><div className="d-flex flex-wrap gap-2">{believeChangeOptions.map(option => (<Button key={option} color={believeInChange === option ? 'primary' : 'light'} onClick={() => setBelieveInChange(option)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>தற்போதைய உங்கள் பகுதியில் மிக முக்கியமான பிரச்சனை எது?</Label><div className="d-flex flex-wrap gap-2">{localIssueOptions.map(option => (<Button key={option} color={localIssue.includes(option) ? 'primary' : 'light'} onClick={() => handleToggle(option, localIssue, setLocalIssue)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        <Row><Col><FormGroup><Label>உங்கள் தற்போதைய MLA-வின் செயல்பாட்டில் நீங்கள் திருப்தியாக இருக்கிறீர்களா?</Label><div className="d-flex flex-wrap gap-2">{mlaPerformanceOptions.map(option => (<Button key={option} color={mlaPerformance === option ? 'primary' : 'light'} onClick={() => setMlaPerformance(option)}>{option}</Button>))}</div></FormGroup></Col></Row>

                        {/* Footer */}
                        <FooterCard footerClass="text-end" />
                    </CardBody>
                </Form>
            </Card>
        </Fragment>
    );
};

export default VoterSurveyForm;
