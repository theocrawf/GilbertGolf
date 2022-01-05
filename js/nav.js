const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
      <div class="logo">
        <a href="/index.html"><img id="logo" src="../images/GM (2).png" alt="logo"></a>
      </div>
      <!-- <a href="https://stream.golfchannel.com/pga-tour" target="_blank"><button id="live">LIVE</button></a> -->
      <!-- <div class="next"><span style="color: #8F8873;font-family:Bai Jamjuree; font-size: 20px;">Next Tournament:</span> <a href="https://stpga.bluegolf.com/bluegolf/stpga21/event/stpga2133/contest/1/leaderboard.htm" target="_blank">Dec 6, 2021</a></div> -->
        <ul id="Navigation">
          <div class="nav-links">
            <li><a href="/html/onthecourse.html">TOURNAMENTS</a></li>
            <li><a href="/html/road.html">ABOUT</a></li>
            <li><a href="/html/offthecourse.html">SPONSORSHIP</a></li>
            <li><a href="/html/lessons.html" >LESSONS</a></li>
          </div>
        </ul>
        <img src="../images/menuwhite.png" class="menu-icon" onclick="menutoggle()">
          <div class="buttons">          
              <div class="container d-flex justify-content-center"> <button type="button" id="share" data-toggle="modal" data-target="#myModal"> Share</button> </div>
              <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                      <div class="modal-content col-12">
                          <div class="modal-header">
                              <h5 class="modal-title">Share</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                          </div>
                          <div class="modal-body">
                              <div class="icon-container1 d-flex">
                                  <div class="smd"><a href="https://twitter.com/intent/tweet?url=https://www.gilmendezgolf.com&text=" target="_blank"><i class=" img-thumbnail fab fa-twitter fa-2x" style="color:#4c6ef5;background-color: aliceblue"></i></a>
                                      <p>Twitter</p>
                                  </div>
                                  <div class="smd"><a href="https://www.facebook.com/sharer/sharer.php?u=www.gilmendezgolf.com" target="_blank"><i class="img-thumbnail fab fa-facebook fa-2x" style="color: #3b5998;background-color: #eceff5;"></i></a>
                                      <p>Facebook</p>
                                  </div>
                                  <div class="smd"><a href="mailto:%7Bemail_address%7D?subject=Gilbert%20Mendez%20Golf&body=https://gilmendezgolf.com%20Please%20check%20out%20my%20website" target="_blank" rel="nofollow"><i class="img-thumbnail fas fa-envelope fa-2x" style="color: white;background-color: orange;"></i></a>
                                    <p>Email</p>
                                </div>
                                <div class="smd"><a href="whatsapp://send?text=https://www.gilmendezgolf.com" target="_blank" rel="nofollow"><i class="img-thumbnail fab fa-whatsapp fa-2x" style="color: #eceff5;background-color: limegreen"></i></a>
                                  <p>WhatsApp</p>
                                </div>
                              </div>
                            </div>
                          <div class="modal-footer"> <label style="font-weight: 600">Page Link <span class="message"></span></label><br />
                              <div class="row"> <input class="col-10 ur" type="url" value="https://www.gilmendezgolf.com" id="myInput" aria-describedby="inputGroup-sizing-default" style="height: 40px;"> <button class="cpy" onclick="myCopyFunction()"><i class="far fa-clone"></i></button> </div>
                          </div>
                      </div>
                  </div>
              </div>
  <a href="/html/donate.html"><button id="donate">Donate</button></a>
</div>
</div>
    `;

}

createNav ();

