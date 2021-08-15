<script>
import Footer from '$lib/footer.svelte';

</script>

<!-- <img
  src="https://res.cloudinary.com/drwfft7zs/image/upload/v1628611739/jonellwood%20dot%20dev/jon_ellwood_cinsc4.svg"
  alt="jon ellwood"> -->
<img
  src="https://res.cloudinary.com/drwfft7zs/image/upload/c_scale,h_741/v1628700738/jonellwood%20dot%20dev/logos-in-row_rbvvfr.png"
  alt="list of logos">
<article>


  <p>I want to become a big boy web dev one day. I am interesting in anything related to JavaScript and any tech around it. I am self taught - although I never cared for that term as I feel it does not give credit to content creators that I have learned from. I devour as much information and knowledge as I can to improve my skills.
  </p>

  <p>

    I currently work as an IT Director of a one man deapartment; for a great organization. During my time I have been able to develop a little bit of skill in at least a hundred areas related to tech. It is that which brought me to the joy and pain that is JavaScript. I have been able to apply what I have learned to save my employer money, provide a value added service to customers, or often times both.
  </p>

  <p>
    Something should go here

  </p>
</article>

<Footer />

<style>
  article{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* background-color: #4169e190; */
    color: #D1e8e2;

  }
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  p{
    /* padding: 1em; */
    padding: 1em;
    background-color: #d9b08c;
    margin: 20px;
    border: #116466 4px solid;
    border-radius: 7px;
    line-height: 150%;
    box-shadow: 2px 2px 5px 2px #ffcb9a ;

  }
  p:hover{
    box-shadow: 2px 2px 5px #d1e8e2;
    background-color: whitesmoke;
    color: #2c3531;
    transition: all 0.5s ease .5s;
  }

  @media only screen and (max-width: 768px) {
    article{
    grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 500px) {
    article{
    grid-template-columns: 1fr;
    }
  }

</style>
