<div align="center"><img style = "width:100%;"src="https://i.imgur.com/yxXA2RN.png"></img></div>
<hr>
<h2 align=center>DrivenPass (Front-End)</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>A password manager</h4>
<h4 align=center>First project using Prisma, a Object-relational mapping(ORM) and doing integration tests with Jest</h4>
<h4 align=center>Check the <a href="https://github.com/DanielCdOliveira/projeto19-drivenpass">Back-end</a> to see API reference</h4>
<div align=center style="display:flex; justify-content: center; gap:5%">
    <img style = "width:30%;"src="https://i.imgur.com/UngkeMY.png">
    <img style = "width:30%;"src="https://i.imgur.com/EmkiF7z.png">
    <img style = "width:30%;"src="https://i.imgur.com/166HJs8.png">
</div>
<hr>


# Requirements

## Users
    
The application should provide a way for people to create accounts and use them.
    
- Account creation
    - The user must provide a valid email and a password to be able to create a user. If the email is already in use, the application cannot create the account. The password must be a minimum of 10 characters. As this is extremely sensitive data, the password must go to the bank encrypted. Use the [bcrypt](https://www.npmjs.com/package/bcrypt) library for this.
- Accessing an account
    - The user must use the registered e-mail and password. If it provides incompatible data, the application should warn you. Upon completion of the login, he should receive a token based on the JWT strategy. Use the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) library for this.
    - **This token must be sent in all requests to identify the user.**

## Credentials
    
Credentials refer to login information for a website and/or service.
    
- Credential creation
    - To register a new credential, the user must provide a url, a username and a password. The user also needs to inform a title/name/label for this credential, since it is possible to register two credentials for the same site.
    - Each credential must have a unique title/name/label, that is, if the user tries to create two credentials with the same name, the application must prevent him (which does not prevent other people from using this title).
    - Because it is sensitive data, the credential password field must be encrypted using an application secret. Use the [cryptr](https://www.npmjs.com/package/cryptr) library for this.
- Search for credentials
    - The application must provide a way to get all credentials or a specific credential (via its id). If the user looks for a credential that is not theirs or that does not exist, the application should warn.
    - All credentials returned must appear with the password decrypted.
- Deletion of credentials
        - Application must allow a credential to be deleted (given its id). If the id does not exist or belongs to someone else's credential, the application should warn.

## Secure Notes
    
Safenotes are free information in text format.
    
- Creating secure notes
    - To register a new secure note, the user must provide a title and note itself. The title cannot be longer than 50 characters and the annotation cannot be longer than 1000 characters.
    - Each annotation must have a unique title, that is, if the user tries to create two annotations with the same name, the application must prevent him (which does not prevent other people from using that title).
- Secure note search
    - The application must provide a way to get all secure notes or a specific secure note (via its id). If the user looks for a secure note that isn't his or doesn't exist, the application should warn him.
- Deletion of secure notes
    - The application must allow a secure note to be deleted (given its id). If the id does not exist or belongs to other people's secure note, the application should warn.

## Cards
    
Cards represent credit and/or debit cards.
    
- Card creation
    - To register a new card, the user must provide the card number, the printed name, the security code, the expiration date, the password, if it is virtual and its type (credit, debit or both).
    - Each card must have a unique title/name/label, that is, if the user tries to create two cards with the same name, the application must prevent him (which does not prevent other people from using that title).
    - Because it is sensitive information, the security code and password of the card must be encrypted using an application secret. Use the [cryptr](https://www.npmjs.com/package/cryptr) library for this.
- Card search
    - The application must provide a way to get all your cards or a specific card (via your id). If the user looks for a card that is not theirs or that does not exist, the application should warn.
- Deletion of cards
    - The application must allow a card to be deleted (given its id). If the id does not exist or belongs to someone else's card, the application should warn you.

## WiFi

Wi-fi's represent access data to an internet network.

- Wi-Fi creation
     - To register a new wifi, the user must provide the network name and network password.
     - To differentiate the networks from each other, the user must also inform a title/name/label for each one of them (Ex: Neighbor's Wifi). This data can be repeated.
     - Because it is sensitive information, the internet network password must be encrypted using an application secret. Use the [cryptr](https://www.npmjs.com/package/cryptr) library for this.
- Search for WiFi networks
     - The application must provide a way to get all wifi networks or a specific network (via its id). If the user searches for a Wi-Fi network that is not theirs or that does not exist, the application should warn.
- Wi-fi networks deletion
     - The application must allow a wi-fi network to be deleted (given its id). If the id doesn't exist or belongs to someone else's wifi network, the app should warn you.

## Usage

Install my project with npm

> Clone the repository:

```bash
  git clone git@github.com:DanielCdOliveira/rojeto19-drivenpass-front.git
```

> Install dependences:

```bash
  npm install
```

> Run aplication:

```bash
  npm start
```

### Built with

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/danielcdoliveira/
