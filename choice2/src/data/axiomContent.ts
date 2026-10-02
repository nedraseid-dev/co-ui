import { TestimonialItem, NewsItem, CapabilitySection } from '../types';

import heroImg from '../assets/images/hero_power_rack_1790690483540.jpg';
import datacenterImg from '../assets/images/capabilities_datacenter_1790690495364.jpg';
import switchgearImg from '../assets/images/capabilities_switchgear_1790690508807.jpg';
import bessImg from '../assets/images/capabilities_bess_grid_1790690528841.jpg';
import portCranesImg from '../assets/images/news_port_cranes_1790690542622.jpg';
import blueprintsImg from '../assets/images/news_blueprints_1790690559803.jpg';
import avatarElenaImg from '../assets/images/avatar_elena_1790690641253.jpg';

export const AXIOM_ASSETS = {
  hero: heroImg,
  datacenter: datacenterImg,
  switchgear: switchgearImg,
  bess: bessImg,
  portCranes: portCranesImg,
  blueprints: blueprintsImg,
  avatarElena: avatarElenaImg,
};

export const AXIOM_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'elena-marsh',
    index: '01 / 03',
    name: 'Elena Marsh',
    role: 'VP Infrastructure & Shore Power',
    company: 'PORT OF VIRGINIA',
    companyLogoText: 'MERIDIAN',
    avatar: avatarElenaImg,
    scope: '1.2 GW SUBSTATION',
    deployed: '18 MONTHS',
    since: '2021',
    quote: '“We reviewed every credible utility contractor in North America. Axiom’s firm capacity commitment was the only proposal backed by dedicated manufacturing and real liquidated damages. They delivered four months ahead of schedule.”',
    highlightPhrase: 'backed by dedicated manufacturing and real liquidated damages.',
  },
  {
    id: 'marcus-vance',
    index: '02 / 03',
    name: 'Marcus Vance',
    role: 'Chief Data Center Engineer',
    company: 'SUNDVIK COMPUTE',
    companyLogoText: 'SUNDVIK',
    avatar: avatarElenaImg,
    scope: '650 MW AI CAMPUS',
    deployed: '14 MONTHS',
    since: '2022',
    quote: '“When scaling hyperscale AI clusters, power availability is the single determinant of go-to-market. Axiom’s turnkey switchyards shaved 24 months off our grid interconnect queue.”',
    highlightPhrase: 'shaved 24 months off our grid interconnect queue.',
  },
  {
    id: 'sarah-chen',
    index: '03 / 03',
    name: 'Sarah Chen',
    role: 'Managing Director, Grid Assets',
    company: 'VALIANT INFRASTRUCTURE',
    companyLogoText: 'VALIANT',
    avatar: avatarElenaImg,
    scope: '2.4 GW PORTFOLIO',
    deployed: 'ACTIVE FLEET',
    since: '2020',
    quote: '“Axiom operates our energy storage systems with 99.98% availability through severe winter events in ERCOT. Their engineering discipline sets the standard for hyperscale reliability.”',
    highlightPhrase: 'sets the standard for hyperscale reliability.',
  },
];

export const AXIOM_NEWS: NewsItem[] = [
  {
    id: 'port-shore-power',
    title: 'Port of Virginia awards Axiom 1.2 GW shore power contract',
    category: 'OPS',
    date: 'Oct 14, 2024',
    readTime: '4 min read',
    type: 'featured',
    image: portCranesImg,
    excerpt: 'Turnkey 138kV switchyard and microgrid infrastructure to eliminate diesel auxiliary emissions across 6 deepwater container berths.',
  },
  {
    id: 'series-c',
    title: 'Axiom Power closes $420M Series C led by Energy Impact Partners',
    category: 'PRESS',
    date: 'Sep 28, 2024',
    readTime: '3 min read',
    type: 'featured',
    image: blueprintsImg,
    excerpt: 'Capital will fund domestic transformer manufacturing expansion and advance our 5.2 GW North American project pipeline.',
  },
  {
    id: 'inverter-telemetry',
    title: 'Fleetwide inverter telemetry shows 99.98% availability across Q3 peak demand',
    category: 'OPS',
    date: 'Sep 12, 2024',
    type: 'row',
  },
  {
    id: 'helix-dc',
    title: 'Helix DC breaks ground on 500 MW AI campus powered by Axiom dedicated sub',
    category: 'PRESS',
    date: 'Aug 29, 2024',
    type: 'row',
  },
  {
    id: 'ercot-standards',
    title: 'Axiom qualifies 300 MW flexible load for ERCOT ancillary service programs',
    category: 'GRID',
    date: 'Aug 04, 2024',
    type: 'row',
  },
];
