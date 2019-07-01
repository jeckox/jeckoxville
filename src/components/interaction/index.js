import ReactGA from 'react-ga';
const EventInteraction = (type) => {
    ReactGA.event({
        category: 'Interaction',
        action: type
    });
};
export default EventInteraction;