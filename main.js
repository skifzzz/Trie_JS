/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var builder = require("./PrefixTreeBuilder");

var tree = builder.create(3, ['print','query','not','and','is','null','user','contactInfo','mailing','mailBatch','mailServer','role','organizationalRole','organization','genericFolder','roleFolder','profileRealm','profileSlot','individualScenario','collectiveScenario','scenarioInfo','scenarioMigrationInfo','scenarioTemplateInfo','collectiveScenarioTransition','individualScenarioTransition','scenarioDeletion','scenarioMigration','scenarioXref','marker','businessProcessMarker','dssServerId','credit-card','promotionStatus','cost-center','abandoned-order','customerCenter','customer','businessArea','recentlyViewedProduct']);

console.log(tree.find('pr'));
console.log(tree.find('-'));
console.log(tree.find('te'));
console.log(tree.find('ting'));

