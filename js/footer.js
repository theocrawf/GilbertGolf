const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="contact-bottom">
    <!-- <div class="follow-button">
    <a href="https://www.instagram.com/gilmendezgolf/" target="_blank"><button class="follow">Follow</button></a>
    </div> -->

      <div class="contact-bottom-words">
        <p class="gil">GILBERT MENDEZ</p>
        <p class="austin">Austin, Tx</p>
          <div class="social-bottom">
          <a href="tel:361-455-7126"><img id="phone" src="../images/gilphone.svg" alt="Phone"></a>
          <a href="mailto:gilmendezgolf@gmail.com" target="_blank"><img id="email" src="../images/email.png" alt="Email"></a>
          <a href="https://www.instagram.com/gilmendezgolf/" target="_blank"><img id="insta" src="../images/instagram.png" alt="Instagram"></a>
          <a href="https://www.facebook.com/gilbert.mendez.108" target="_blank"><img id="fb" src="../images/facebook.png" alt="Facebook"></a>
          </div>
      </div>
      <div class="footer">
        <a href="https://www.toadstoolcreative.com" target="_blank">Website Created by Toadstool Creative Group</a>
      </div>
    `;

}

createFooter ();