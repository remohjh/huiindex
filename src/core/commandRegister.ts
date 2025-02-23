import { CommandType } from "./command";
import searchCommands from "./commands/search/searchCommands";
import gotoCommand from "./commands/gotoCommand";
import spaceCommands from "./commands/space/spaceCommands";
import dateCommand from "./commands/dateCommand";
import clearCommand from "./commands/terminal/clearCommand";
import historyCommand from "./commands/terminal/historyCommand";
import userCommands from "./commands/user/userCommands";
import timingCommand from "./commands/timing/timingCommand";
import backgroundCommand from "./commands/terminal/config/backgroundCommand";
import resetCommand from "./commands/terminal/config/resetCommand";
import fanyiCommand from "./commands/fanyi/fanyiCommand";
import helpCommand from "./commands/terminal/help/helpCommand";
import infoCommand from "./commands/terminal/info/infoCommand";
import pingCommand from "./commands/pingCommand";
import hintCommand from "./commands/terminal/config/hintCommand";
import todoCommand from "./commands/todo/todoCommand";
import musicCommand from "./commands/relax/music/musicCommand";
import moyuCommand from "./commands/relax/moyu/moyuCommand";
import shortcutCommand from "./commands/terminal/shortcut/shortcutCommand";
import welcomeCommand from "./commands/terminal/config/welcomeCommand";
import hotCommand from "./commands/hot/hotCommand";
import varbookCommand from "./commands/varbook/varbookCommand";
import ipCommand from "./commands/ip/ipCommand";
import weatherCommand from "./commands/weather/weatherCommand";
import foregroundCommand from "./commands/terminal/config/foregroundCommand";
import textCommand from "./commands/TextBus/textCommand";
/**
 * 命令列表（数组元素顺序会影响 help 命令的展示顺序）
 */
const commandList: CommandType[] = [
  shortcutCommand,
  gotoCommand,
  ...searchCommands,
  ...spaceCommands,
  ...userCommands,
  varbookCommand,
  hotCommand,
  todoCommand,
  timingCommand,
  dateCommand,
  clearCommand,
  historyCommand,
  fanyiCommand,
  helpCommand,
  infoCommand,
  pingCommand,
  musicCommand,
  moyuCommand,
  welcomeCommand,
  backgroundCommand,
  resetCommand,
  hintCommand,
  ipCommand,
  weatherCommand,
  foregroundCommand,
  textCommand,
];

/**
 * 命令字典
 */
const commandMap: Record<string, CommandType> = {};

commandList.forEach((command) => {
  commandMap[command.func] = command;
  command.alias?.forEach((name) => {
    commandMap[name] = command;
  });
});

export { commandList, commandMap };
