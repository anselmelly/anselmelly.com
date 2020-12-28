<script>
	import TailwindStyles from "./TailwindStyles.svelte";
	import Services from "./components/Services.svelte";
	import Contacts from "./components/Contacts.svelte";
	import Footer from "./components/Footer.svelte";
	import Clients from "./components/Clients.svelte";
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte";
	import About from "./components/About.svelte";
	import ShowCase from "./components/ShowCase.svelte";
	import Experiences from "./components/Experiences.svelte";
	import Testimonials from "./components/Testimonials.svelte";
	import Meta from "./components/Meta.svelte";
</script>

<Meta />
<div class="mx-auto">
	<Nav />
	<Header />
	<About />
	<Services />
	<Clients />
	<ShowCase />
	<Experiences />
	<Testimonials />
	<Contacts />
	<Footer />
</div>
