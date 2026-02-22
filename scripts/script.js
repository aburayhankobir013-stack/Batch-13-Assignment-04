const cards=[
  {
    id:'1',
    companyName: 'Mobile First Corp',
    position: 'React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $175,000',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide',
    status: 'pending'
  },
  {
    id:'2',
    companyName: 'WebFlow Agency',
    position: 'Web Designer & Developer',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    salary: '$80,000 - $120,000',
    description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
    status: 'pending'
  },
  {
    id:'3',
    companyName: 'DataViz Solutions',
    position: 'Data Visualization Specialist',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$125,000 - $165,000',
    description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
    status: 'pending'
  },
  {
    id:'4',
    companyName: 'CloudFirst Inc',
    position: 'Backend Developer',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$140,000 - $190,000',
    description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud intrastructure.',
    status: 'pending'
  },
  {
    id:'5',
    companyName: 'Innovation Labs',
    position: 'UI/UX Engineer',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $150,000',
    description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
    status: 'pending'
  },
  {
    id:'6',
    companyName: 'MegaCorp Solutions',
    position: 'Javascript Developer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 - $170,000',
    description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development.',
    status: 'pending'
  },
  {
    id:'7',
    companyName: 'StartupXYZ',
    position: 'Full Stack Engineer',
    location: 'Remote',
    type: 'Remote',
    salary: '$120,000 - $160,000',
    description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and package included.',
    status: 'pending'
  },
  {
    id:'8',
    companyName: 'TechCorp Industries',
    position: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130,000 - $175,000',
    description: 'We are looking for an experienced Forntend Developer to build scalable web applications using React and TypeScript. You will work a talented team on cutting-edge projects.',
    status: 'pending'
  }
];

function cardMaker(){
  // Create all elements
  const card=document.createElement('div');
  const companyName=document.createElement('h1');
  const position=document.createElement('p');
  const listContainer=document.createElement('ul');
  const location=document.createElement('li');
  const type=document.createElement('li');
  const salary=document.createElement('li');
  const notAppliedNotifier=document.createElement('div');
  const interviewNotifier=document.createElement('div');
  const rejectedNotifier=document.createElement('div');
  const description=document.createElement('p');
  const btns=document.createElement('div');
  const interviewBtn=document.createElement('button');
  const rejectedBtn=document.createElement('button');
  const deleteBtn=document.createElement('button');
  const i=document.createElement('i');

  // Add class for styling
  card.classList.add('card');
  companyName.classList.add('companyName');
  position.classList.add('position');
  listContainer.classList.add('list-container');
  location.classList.add('location');
  type.classList.add('type');
  salary.classList.add('salary');
  notAppliedNotifier.classList.add('not-applied-notifier');
  interviewNotifier.classList.add('interview-notifier');
  rejectedNotifier.classList.add('rejectedNotifier');
  description.classList.add('description');
  btns.classList.add('btns');
  interviewBtn.classList.add('interviewBtn');
  rejectedBtn.classList.add('rejectedBtn');
  deleteBtn.classList.add('deleteBtn');
  i.classList.add('fa-solid','fa-trash');

  // Making card structure
  card.appendChild(companyName);
  card.appendChild(position);
  card.appendChild(listContainer);

  listContainer.appendChild(location);
  listContainer.appendChild(type);
  listContainer.appendChild(salary);

  card.appendChild(notAppliedNotifier);
  card.appendChild(interviewNotifier);
  card.appendChild(rejectedNotifier);
  card.appendChild(description);
  card.appendChild(btns);

  btns.appendChild(interviewBtn);
  btns.appendChild(rejectedBtn);

  card.appendChild(deleteBtn);
  deleteBtn.appendChild(i);

  return card;
}

