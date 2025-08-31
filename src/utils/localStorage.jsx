
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile and analyze last quarter sales data.",
        "date": "2025-08-20",
        "category": "Reports",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Client Database",
        "description": "Add new clients from recent onboarding session.",
        "date": "2025-08-21",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Product Demo",
        "description": "Conduct online demo for client X.",
        "date": "2025-08-23",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskStats": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Ishita",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Bug Fixing",
        "description": "Resolve login page authentication issue.",
        "date": "2025-08-19",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write Unit Tests",
        "description": "Cover payment module with unit tests.",
        "date": "2025-08-22",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Sprint retrospective and planning.",
        "date": "2025-08-24",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Email Follow-up",
        "description": "Send follow-up emails to pending leads.",
        "date": "2025-08-20",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskStats": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Cross verify items in stock with database.",
        "date": "2025-08-18",
        "category": "Operations",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Supplier Call",
        "description": "Confirm delivery status for pending orders.",
        "date": "2025-08-21",
        "category": "Communication",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Invoice",
        "description": "Generate invoice for client Z.",
        "date": "2025-08-22",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskStats": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Kavya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Mockups",
        "description": "Create homepage mockups for new project.",
        "date": "2025-08-19",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Client Presentation",
        "description": "Present UI changes to client board.",
        "date": "2025-08-23",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Branding Kit",
        "description": "Revise logo and typography in style guide.",
        "date": "2025-08-25",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Email Newsletter",
        "description": "Prepare September campaign email.",
        "date": "2025-08-26",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskStats": {
      "active": 3,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Meera",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Data Backup",
        "description": "Backup server database before update.",
        "date": "2025-08-20",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Perform system vulnerability assessment.",
        "date": "2025-08-24",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Patch Deployment",
        "description": "Deploy latest security patches to all servers.",
        "date": "2025-08-25",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server Maintenance",
        "description": "Perform routine maintenance check.",
        "date": "2025-08-27",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Network Monitoring",
        "description": "Monitor traffic for unusual activity.",
        "date": "2025-08-28",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskStats": {
      "active": 4,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  }
]

const admin = [
  {
    "id": 101,
    "firstName": "Vikram",
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage=()=>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
}
