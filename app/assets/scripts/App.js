import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jQuery';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($(".feature-item"), "85%");
var revealOnScroll = new RevealOnScroll($(".testimonial"), "60%");