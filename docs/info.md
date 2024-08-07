<h2>Project Challenge: Mario Kart.JS</h2>

Base project:
https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart


  <table>
        <tr>
            <td>
                <img src="../docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objective:</b>
                <p>Mario Kart is a series of racing games developed and published by Nintendo. Our challenge will be to create the logic for a video game to simulate Mario Kart races, considering the rules and mechanics below.</p>
            </td>
        </tr>
    </table>

<h3>Players</h3>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="../docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Handling: 3</p>
                <p>Power: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="../docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Handling: 4</p>
                <p>Power: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="../docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Handling: 4</p>
                <p>Power: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="../docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 5</p>
                <p>Handling: 2</p>
                <p>Power: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="../docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Handling: 4</p>
                <p>Power: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="../docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Handling: 2</p>
                <p>Power: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h4>🕹️ Rules & Mechanics:</h4>

<b>Players:</b>

<input type="checkbox" id="players-item" />
<label for="players-item">The computer must receive two characters to compete in the race, each in its own object</label>

<b>Tracks:</b>

<ul>
  <li><input type="checkbox" id="tracks-1-item" /> <label for="tracks-1-item">Characters will race on a random track for 5 rounds</label></li>
  <li><input type="checkbox" id="tracks-2-item" /> <label for="tracks-2-item">In each round, a track block will be drawn which can be a straight, curve, or confrontation</label>
    <ul>
      <li><input type="checkbox" id="tracks-2-1-item" /> <label for="tracks-2-1-item">If the track block is a STRAIGHT, the player must roll a 6-sided die and add their SPEED attribute; the winner gets a point</label></li>
      <li><input type="checkbox" id="tracks-2-2-item" /> <label for="tracks-2-2-item">If the track block is a CURVE, the player must roll a 6-sided die and add their HANDLING attribute; the winner gets a point</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">If the track block is a CONFRONTATION, the player must roll a 6-sided die and add their POWER attribute; the loser loses a point</label></li>
      <li><input type="checkbox" id="tracks-2-4-item" /> <label for="tracks-2-4-item">No player can have a negative score (values below 0)</label></li>
    </ul>
  </li>
</ul>

<b>Victory Condition:</b>

<input type="checkbox" id="victory-item" />
<label for="victory-item">At the end, the player with the most points wins</label>

<h4>EXTRAS: CONFRONTATION</h4>
<ul>
    <li>Randomly draw whether it’s a shell (-1 point) or a bomb (-2 points)</li>
    <li>The winner of the confrontation gets a turbo (+1 point) randomly</li>
</ul>
 
