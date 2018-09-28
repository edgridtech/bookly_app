export const personalDetails = [{
  fullname: 'John Doe'
}]
export const achievementsState = [
    {
        name: 'Beginer',
        class: '',
        img: '../../assets/imgs/'+name+'.png',
        level: 1,
        active: ''
      },
      {
        name: 'Apprentice',
        class: '',
        img: '../../assets/imgs/'+name+'.png',
        level: 2,
        active: '-inactive'
      },
      {
        name: 'Practitioner',
        class: '',
        img: '../../assets/imgs/'+name+'.png',
        level: 3,
        active: '-inactive'
      },
      {
        name: 'Ninja',
        class: '',
        img: '../../assets/imgs/'+name+'.png',
        level: 4,
        active: '-inactive'
      },
      {
        name: 'Guru',
        class: '',
        img: '../../assets/imgs/'+name+'.png',
        level: 5,
        active: '-inactive'
      },
      {
        name: 'Lord',
        class: '',
        img: '../../assets/imgs/'+name+'.png',
        level: 6,
        active: '-inactive'
      }
]
export const notesState = [
    {
      timeStamp: '3 days',
      title: 'Planning for a Career in Medcine',
      text: 'Something simple goes here like a short story or sometign averagely long',
      selected: false
    },
    {
      timeStamp: '3 days',
      title: 'Heineman Biology',
      text: 'Something simple goes here like a short story or sometign averagely long',
      selected: false
    },
    {
      timeStamp: '3 days',
      title: 'Planning for a Career in Medecine',
      text: 'Something simple goes here like a short story or sometign averagely long',
      selected: false
    },
    {
      timeStamp: '3 days',
      title: 'Heineman Biology',
      text: 'Something simple goes here like a short story or le goes here like a short story or le goes here like a short story or le goes here like a short story or le goes here like a short story or le goes here like a short story or le goes here like a short story or le goes here like a short story or vvsometign averagely long',
      selected: false
    },
    {
      timeStamp: '3 days',
      title: 'Heineman Biology',
      text: 'Something simple goes here like a short story or sometign averagely long',
      selected: false
    }
  ]
export const availableSubjectsState = [
    {
      subject: 'English Language', 
      value:  '',
      style: 'EnglishStyle', 
      selected: false
    },
    {
      subject: 'Mathematics', 
      value:  '',
      style: 'MathStyle', 
      selected: false
    },
    {
      subject: 'Physics', 
      value:  '',
      style: 'PhyStyle', 
      selected: false
    },
    {
      subject: 'Literature', 
      value:  '',
      style: 'LitStyle', 
      selected: false
    },
    {
      subject: 'Civic Education', 
      value:  '',
      style: 'CivStyle', 
      selected: false
    },
    {
      subject: 'Biology', 
      value:  '',
      style: 'BioStyle', 
      selected: false
    },
    {
      subject: 'Agricultural Science', 
      value:  '',
      style: 'AgricStyle', 
      selected: false
    },
    {
      subject: 'Chemistry', 
      value:  '',
      style: 'ChemStyle', 
      selected: false
    },
    {
      subject: 'Geography', 
      value:  '',
      style: 'GeoStyle', 
      selected: false
    },
    {
      subject: 'Commerce', 
      value:  '',
      style: 'CommStyle', 
      selected: false
    },
    {
      subject: 'Economics', 
      value:  '',
      style: 'EcoStyle', 
      selected: false
    }
  ]
export const subjectDetails = [
    {
      subject: 'Mathematics', 
      value: 'mathematics', 
      image: 'Mathematics',
      topics: [
        { title: 'Algebra', isLocked: false, isSearching: false },
        { title: 'Differentiation', isLocked: true, isSearching: false },
        { title: 'Integration - calculus', isLocked: false, isSearching: false },
        { title: 'Matrices', isLocked: false, isSearching: false },
        { title: 'Polynomials', isLocked: false, isSearching: false },
      ]
    },
    {
      subject: 'English-Language', 
      value: 'english', 
      image: 'English',
      topics: [
        { title: 'Comprehension', isLocked: false, isSearching: false },
        { title: 'Diphthongs', isLocked: true, isSearching: false },
        { title: 'consonant sounds', isLocked: false, isSearching: false },
        { title: 'Vowel sounds', isLocked: false, isSearching: false },
        { title: 'Letter Writing', isLocked: false, isSearching: false },
      ]
    },
    {
      subject: 'Literature', 
      value: 'englishlit', 
      image: 'Literature',
      topics: []
    },
    {
      subject: 'Chemistry', 
      image: 'Chemistry',
      value: 'chemistry', 
      topics: [
        { title: 'Oxygen and its compounds', isLocked: false, isSearching: false },
        { title: 'Nitrogen and its compounds', isLocked: true, isSearching: false },
        { title: 'Acids, Bases and salts', isLocked: false, isSearching: false },
        { title: 'Chemical Equations', isLocked: false, isSearching: false },
        { title: 'Ph', isLocked: false, isSearching: false },
        { title: 'Structure of an Atom', isLocked: false, isSearching: false },
        { title: 'Periodic Chemistry', isLocked: true, isSearching: false },
        { title: 'Bonding', isLocked: false, isSearching: false },
        { title: 'States of matter', isLocked: false, isSearching: false },
        { title: 'Redox Reactions', isLocked: false, isSearching: false },
        { title: 'Metals & their compounds', isLocked: false, isSearching: false },
        { title: 'Nitrogen and its compounds', isLocked: true, isSearching: false },
        { title: 'Acids and Bases', isLocked: false, isSearching: false },
        { title: 'Chemical Equations', isLocked: false, isSearching: false },
        { title: 'Ph', isLocked: false, isSearching: false },
      ]
    },
    {
      subject: 'Biology', 
      image: 'Biology',
      value: 'biology', 
      topics: [
        { title: 'Reproductive System', isLocked: false, isSearching: false },
        { title: 'Circulatory System', isLocked: true, isSearching: false },
        { title: 'Digestive System', isLocked: false, isSearching: false },
        { title: 'Taxonomy', isLocked: false, isSearching: false },
        { title: 'Plant Biology', isLocked: false, isSearching: false },
        { title: 'Concept of Living', isLocked: false, isSearching: false },
        { title: 'Circulatory System', isLocked: true, isSearching: false },
        { title: 'Cell structure and functions', isLocked: false, isSearching: false },
        { title: 'Excretion', isLocked: false, isSearching: false },
        { title: 'Skeletal System', isLocked: false, isSearching: false },
        { title: 'Respiratory System', isLocked: false, isSearching: false },
        { title: 'Nervous System', isLocked: true, isSearching: false },
        { title: 'Nutrition', isLocked: false, isSearching: false },
        { title: 'Ecosystem', isLocked: false, isSearching: false },
        { title: 'Heredity', isLocked: false, isSearching: false },
      ]
    },
    {
      subject: 'Economics', 
      image: 'Economics',
      value: 'economics', 
      topics: [
        { title: 'Intro. to Economics', isLocked: false, isSearching: false },
        { title: 'Micro Economics', isLocked: true, isSearching: false },
        { title: 'Consumer Behavious', isLocked: false, isSearching: false },
        { title: 'Demand', isLocked: false, isSearching: false },
        { title: 'Supply', isLocked: false, isSearching: false },
        { title: 'Trade', isLocked: false, isSearching: false },
        { title: 'Money and Inflation', isLocked: false, isSearching: false },
        { title: 'Public Finace', isLocked: false, isSearching: false },
        { title: 'Industrialization', isLocked: false, isSearching: false },
      ]
    },
    {
      subject: 'Commerce', 
      image: 'Commerce',
      value: 'commerce', 
      topics: []
    },
    {
      subject: 'Physics', 
      image: 'Physics',
      value: 'physics', 
      topics: []
    },
    {
      subject: 'Geography', 
      image: 'Geography',
      value: 'geography', 
      topics: []
    },
    {
      subject: 'Civic Education', 
      image: 'Civic',
      value: 'civiledu', 
      topics: []
    },
    // {
    //   subject: 'Accounting', 
    //   image: 'Accounting',
    //   value: 'Accounting', 
    // },
    {
      subject: 'Agricultural Sci.', 
      image: 'Agricultural',
      value: 'Agricultiral science',
      topics: [
        { title: 'Meaning of Agriculture', isLocked: false, isSearching: false },
        { title: 'Agricultural Ecology', isLocked: true, isSearching: false },
        { title: 'Agricultural Mechanization', isLocked: false, isSearching: false },
        { title: 'Crop Production', isLocked: false, isSearching: false },
        { title: 'Forestry', isLocked: false, isSearching: false },
        { title: 'Animal Production', isLocked: false, isSearching: false },
        { title: 'Agricultural Economics', isLocked: false, isSearching: false },
        { title: 'Soil Profile', isLocked: false, isSearching: false },
        // { title: 'Industrialization', isLocked: false, isSearching: false },
      ]
    }
  ]
export const selectedSubjects = [
    {
        subject: 'Mathematics', 
        value: 'mathematics', 
        image: 'Mathematics',
        topics: [
          { title: 'Algebra', isLocked: false, isSearching: false },
          { title: 'Differentiation', isLocked: true, isSearching: false },
          { title: 'Integration - calculus', isLocked: false, isSearching: false },
          { title: 'Matrices', isLocked: false, isSearching: false },
          { title: 'Polynomials', isLocked: false, isSearching: false },
        ]
      },
      {
        subject: 'English-Language', 
        value: 'english', 
        image: 'English',
        topics: [
          { title: 'Comprehension', isLocked: false, isSearching: false },
          { title: 'Diphthongs', isLocked: true, isSearching: false },
          { title: 'consonant sounds', isLocked: false, isSearching: false },
          { title: 'Vowel sounds', isLocked: false, isSearching: false },
          { title: 'Letter Writing', isLocked: false, isSearching: false },
        ]
    }
]
export default {
  personalDetails,
  achievementsState,
  notesState,
  availableSubjectsState,
  subjectDetails,
  selectedSubjects
};