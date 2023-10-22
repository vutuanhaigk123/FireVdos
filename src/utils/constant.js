export const API_KEYS = [
  {
    mail: "group-no-reply-20@student.hcmus.edu.vn",
    apiKey: "b1397966admsh4ce19b85380aa36p10152ejsnbea2cd3616d5",
  },
  {
    mail: "groupphpmyadmin20@student.hcmus.edu.vn",
    apiKey: "a10d6f350bmshc61d0749f3fddbdp1e879bjsnd8caa0b89be2",
  },
  {
    mail: "grouppayment20@student.hcmus.edu.vn",
    apiKey: "ba20e9d4d4msh354ff64c9003647p101cc2jsnde47ec01c223",
  },
  {
    mail: "grouppay220@student.hcmus.edu.vn",
    apiKey: "550c1a6be9mshb6d05737c8007c8p15502bjsn4e6d5f7e9c6d",
  },
  {
    mail: "grouppay20@student.hcmus.edu.vn",
    apiKey: "f5ab3b52a0msh4f7c7eafc1d02f5p1ca582jsnd6d8b606c582",
  },
  {
    mail: "groupmysql220@student.hcmus.edu.vn",
    apiKey: "b377f4b6c1mshf81ae550cc798b4p149bd1jsn0cb9d75bdcdf",
  },
  {
    mail: "groupmysql20@student.hcmus.edu.vn",
    apiKey: "d9b419e31cmsh15e136969a15a86p1b7f74jsna866c573fda0",
  },
  {
    mail: "groupkodemy20@student.hcmus.edu.vn",
    apiKey: "73d08fda0emshc8b313e8e1bea21p18f201jsn0ab220d661b7",
  },
  {
    mail: "groupkahoot20@student.hcmus.edu.vn",
    apiKey: "50c5a5cde7msh5adcc50294cd832p1702adjsn9881f47812bd",
  },
  {
    mail: "groupjudge20@student.hcmus.edu.vn",
    apiKey: "4b7726a0b6msh67b5ea29089abc5p1eaa57jsn4bf3730ed8ac",
  },
  {
    mail: "groupintellij20@student.hcmus.edu.vn",
    apiKey: "e623bed0e7msh73cb24b815fc0a6p16ae32jsn1c8c75e2bc12",
  },
  {
    mail: "groupgrmysql20@student.hcmus.edu.vn",
    apiKey: "bd4514f89amsha5eb943530c6a60p194af4jsnbd6aafeb4c23",
  },
  {
    mail: "groupbaoduy20@student.hcmus.edu.vn",
    apiKey: "ad40b0d808msh4f903bd3eec061ep13af51jsn49e057128bee",
  },
  {
    mail: "grouprapidapi20@student.hcmus.edu.vn",
    apiKey: "1955375647msh1fd23a5c60b5b4fp1b4fe4jsn449e75abd159",
  },
];

export const getYTApiKey = () => {
  const randNum = Date.now() % API_KEYS.length;
  return API_KEYS.at(randNum).apiKey;
};
