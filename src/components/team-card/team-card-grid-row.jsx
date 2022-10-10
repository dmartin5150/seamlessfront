const TeamCardGridRow = ({ teamData }) => {
  let nextAppt = teamData.next.split(' ')[0];
  if (nextAppt === '2030-01-01'){
    nextAppt = 'No follow up';
  }
  return (
    <div className="team-card-grid__row">
      <div className="team-card-grid__row--item">{teamData.fname} {teamData.lname}</div>
      <div className="team-card-grid__row--item">{teamData.specialty}</div>
      <div className="team-card-grid__row--contact">
        <div className="team-card-grid__row--contact--address">
          {teamData.address}
        </div>
        <div className="team-card-grid__row--contact--city">
          {teamData.city}, {teamData.state} {teamData.zip}
        </div>
        <div className="team-card-grid__row--contact--phone">
          {teamData.phone}
        </div>
      </div>
      <div className="team-card-grid__row--item">{teamData.last.split(' ')[0]}</div>
      <div className="team-card-grid__row--item">{nextAppt}</div>
    </div>
  );
};

export default TeamCardGridRow;
