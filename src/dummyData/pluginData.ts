import { IPluginDetail, IUser } from '../types/types';

export const dummyPlugins: IPluginDetail[] = [
  {
    author: "John Smith",
    name: "Rebar Modeler Pro",
    heading: "Advanced Rebar Modeling Plugin for PPVC Projects",
    description: "Advanced rebar modeling tool for complex concrete structures. Features automatic distribution and custom shapes.",
    thumbnail: "https://picsum.photos/800/400?random=1",
    title: "Rebar Modeler Pro v2.1",
    file: "https://example.com/plugins/rebar-modeler.zip",
    content: [
      "Welcome to Rebar Modeler Pro, the most comprehensive rebar modeling solution for Tekla Structures.",
      "This plugin streamlines your workflow with automatic rebar distribution and custom shape generation for any concrete structure.",
      "Key Features:\n- Automatic rebar distribution based on structural requirements\n- Custom shape generator for complex geometries\n- Smart spacing optimization\n- Automatic clash detection\n- Quick quantity takeoff",
      "The plugin is designed specifically for PPVC (Prefabricated Prefinished Volumetric Construction) projects, making it invaluable for modular construction workflows.",
      "Getting started is easy - simply select your concrete element, choose your rebar pattern, and let the plugin handle the rest."
    ],
    image: [
      "https://picsum.photos/800/600?random=3",
      "https://picsum.photos/800/600?random=4",
      "https://picsum.photos/800/600?random=5"
    ],
    tags: ["rebar", "modeling", "automation", "concrete", "PPVC"],
    youtubeId: "dQw4w9WgXcQ",
    createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
    downloads: 245,
    rating: 4.8,
    version: "2.1.0"
  },
  {
    author: "Sarah Chen",
    name: "Steel Connection Designer",
    heading: "Automated Steel Connection Design Suite",
    description: "Streamline your steel connection design process with this powerful tool. Includes extensive connection type library.",
    thumbnail: "https://picsum.photos/800/400?random=2",
    title: "Steel Connection Designer v1.3",
    file: "https://example.com/plugins/connection-designer.zip",
    content: [
      "Steel Connection Designer is your one-stop solution for designing and analyzing steel connections in Tekla Structures.",
      "Our comprehensive library includes all common connection types, with automatic design checks and optimization.",
      "Key Features:\n- Extensive connection type library\n- Automatic design validation\n- Load calculation and analysis\n- Detailed connection reports\n- BIM-ready output",
      "Perfect for both simple and complex steel structures, the plugin ensures your connections meet all relevant design codes.",
      "The intuitive interface makes it easy to create, modify, and validate your connections in minutes instead of hours."
    ],
    image: [
      "https://picsum.photos/800/600?random=6",
      "https://picsum.photos/800/600?random=7",
      "https://picsum.photos/800/600?random=8"
    ],
    tags: ["steel", "connections", "design", "automation"],
    youtubeId: "M7lc1UVf-VE",
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
    downloads: 189,
    rating: 4.6,
    version: "1.3.2"
  },
  {
    author: "Mike Johnson",
    name: "Quantity Takeoff Master",
    heading: "Advanced Quantity Takeoff & Cost Estimation",
    description: "Automatic quantity takeoff tool for Tekla models. Generate accurate material lists and cost estimates.",
    thumbnail: "https://picsum.photos/800/400?random=3",
    title: "Quantity Takeoff Master v3.0",
    file: "https://example.com/plugins/takeoff-master.zip",
    content: [
      "Quantity Takeoff Master revolutionizes the way you handle material quantities and cost estimation in Tekla Structures.",
      "This powerful plugin automatically generates detailed quantity reports for all model elements, saving hours of manual work.",
      "Key Features:\n- Automatic quantity extraction\n- Custom report templates\n- Cost calculation engine\n- Material classification\n- Excel integration",
      "The plugin handles all types of elements - concrete, steel, rebar, miscellaneous parts, and more.",
      "Generate professional reports with just a few clicks, complete with visualizations and cost breakdowns."
    ],
    image: [
      "https://picsum.photos/800/600?random=9",
      "https://picsum.photos/800/600?random=10",
      "https://picsum.photos/800/600?random=11"
    ],
    tags: ["quantity", "takeoff", "estimation", "BIM"],
    youtubeId: "9bZkp7q19f0",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    downloads: 412,
    rating: 4.9,
    version: "3.0.1"
  }
];

export const dummyUsers: IUser[] = [
  {
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Senior Structural Engineer with 15+ years of experience in BIM and Tekla development. Created over 20 popular plugins for the Tekla community.",
    createAt: Date.now() - 365 * 24 * 60 * 60 * 1000,
    email: "john.smith@example.com",
    name: "John Smith",
    position: "Senior BIM Developer",
    uid: "user123",
    plugin: {
      plugin_1: true,
      plugin_2: true
    }
  },
  {
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Structural designer specializing in steel connections and automated design workflows. Led the development of several innovative Tekla plugins.",
    createAt: Date.now() - 300 * 24 * 60 * 60 * 1000,
    email: "sarah.chen@example.com",
    name: "Sarah Chen",
    position: "Lead Structural Designer",
    uid: "user456",
    plugin: {
      plugin_3: true
    }
  },
  {
    avatar: "https://i.pravatar.cc/150?img=8",
    bio: "BIM specialist focusing on quantity takeoff and cost estimation automation. Over 10 years of experience in construction technology.",
    createAt: Date.now() - 250 * 24 * 60 * 60 * 1000,
    email: "mike.johnson@example.com",
    name: "Mike Johnson",
    position: "BIM Manager",
    uid: "user789",
    plugin: {
      plugin_4: true,
      plugin_5: true,
      plugin_6: true
    }
  }
];
