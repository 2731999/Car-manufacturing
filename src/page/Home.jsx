import React from 'react';

// Define data for each phase
const phases = [
  { name: 'Market Research', details: 'External: B2C (Online, Interview, Public Data, Health), Internal: B2C' },
  { name: 'Planning', details: 'PRD, Specs' },
  { name: 'Designing', details: 'Hardware, Software' },
  { name: 'Manufacturing', details: 'Material, Production' },
  { name: 'Sales/Marketing', details: 'Online, Dealership' }
];

const Phase = ({ phase }) => {
  return (
    <div className="phase">
      <h3>{phase.name}</h3>
      <p>{phase.details}</p>
    </div>
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhase: null,
      isMarketResearchClicked: false,
      isExternalClicked: false,
      isB2C1Clicked: false,
      isPlanningClicked: false,
      isDesigningClicked: false,
      isManufacturingClicked: false,
      isSalesMarketingClicked: false // New state for Sales/Marketing button click
    };
  }

  handlePhaseHover = (phase) => {
    this.setState({ selectedPhase: phase });
  };

  handleMarketResearchClick = () => {
    this.setState((prevState) => ({
      isMarketResearchClicked: !prevState.isMarketResearchClicked,
      isExternalClicked: false,
      isB2C1Clicked: false,
    }));
  };

  handleExternalClick = () => {
    this.setState((prevState) => ({
      isExternalClicked: !prevState.isExternalClicked,
      isB2C1Clicked: false,
    }));
  };

  handleB2C1Click = () => {
    this.setState((prevState) => ({
      isB2C1Clicked: !prevState.isB2C1Clicked,
    }));
  };

  handlePlanningClick = () => {
    this.setState((prevState) => ({
      isPlanningClicked: !prevState.isPlanningClicked,
    }));
  };

  handleDesigningClick = () => {
    this.setState((prevState) => ({
      isDesigningClicked: !prevState.isDesigningClicked,
    }));
  };

  handleManufacturingClick = () => {
    this.setState((prevState) => ({
      isManufacturingClicked: !prevState.isManufacturingClicked,
    }));
  };

  handleSalesMarketingClick = () => {
    this.setState((prevState) => ({
      isSalesMarketingClicked: !prevState.isSalesMarketingClicked,
    }));
  };

  render() {
    return (
      <div className="app">
        <div className="timeline">
          <h1> Car Manufacturing </h1>
          {phases.map((phase, index) => (
            <div
              key={index}
              className="phase-box"
              onMouseEnter={() => this.handlePhaseHover(phase)}
              onMouseLeave={() => this.handlePhaseHover(null)}
            >
              {phase.name === 'Planning' ? (
                <button onClick={this.handlePlanningClick}>{phase.name}</button>
              ) : phase.name === 'Designing' ? (
                <button onClick={this.handleDesigningClick}>{phase.name}</button>
              ) : phase.name === 'Manufacturing' ? (
                <button onClick={this.handleManufacturingClick}>{phase.name}</button>
              ) : phase.name === 'Sales/Marketing' ? ( // Modified to handle click instead of hover
                <button onClick={this.handleSalesMarketingClick}>{phase.name}</button>
              ) : (
                <button onClick={this.handleMarketResearchClick}>{phase.name}</button>
              )}
            </div>
          ))}
          {this.state.isPlanningClicked && (
            <div className="planning-buttons">
              <button onClick={() => console.log("PRD")}>PRD</button>
              <button onClick={() => console.log("Specs")}>Specs</button>
            </div>
          )}
          {this.state.isMarketResearchClicked && (
            <div className="research-buttons">
              <button onClick={() => console.log("Internal Research")}>Internal</button>
              <button onClick={this.handleExternalClick}>External</button>
              {this.state.isExternalClicked && (
                <div className="b2c-buttons">
                  <button onClick={this.handleB2C1Click}>B2C</button>
                  <button>B2C</button>
                </div>
              )}
              {this.state.isB2C1Clicked && (
                <div className="b2c-options">
                  <button onClick={() => console.log("Online")}>Online</button>
                  <button onClick={() => console.log("Interview")}>Interview</button>
                  <button onClick={() => console.log("Public Data")}>Public Data</button>
                  <button onClick={() => console.log("Health")}>Health</button>
                </div>
              )}
            </div>
          )}
          {this.state.isDesigningClicked && (
            <div className="designing-buttons">
              <button onClick={() => console.log("Hardware")}>Hardware</button>
              <button onClick={() => console.log("Software")}>Software</button>
            </div>
          )}
          {this.state.isManufacturingClicked && (
            <div className="manufacturing-buttons">
              <button onClick={() => console.log("Material")}>Material</button>
              <button onClick={() => console.log("Production")}>Production</button>
            </div>
          )}
          {this.state.isSalesMarketingClicked && ( 
            <div className="sales-marketing-buttons">
              <button onClick={() => console.log("Online")}>Online</button>
              <button onClick={() => console.log("Dealership")}>Dealership</button>
            </div>
          )}
        </div>
        <div className="details">
          {this.state.selectedPhase && <Phase phase={this.state.selectedPhase} />}
        </div>
      </div>
    );
  }
}

export default Home;
