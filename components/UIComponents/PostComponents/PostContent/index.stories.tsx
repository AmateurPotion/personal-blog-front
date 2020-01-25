import React from "react";
import Component from "./index";
import { withKnobs, object } from "@storybook/addon-knobs";

export default {
    title: "PAGES|Post/PostContent",
    component: Component,
    decorators: [withKnobs]
};

export const standard = () => {
    const label = "POST";
    const defaultValue = {
        id: "wfew",
        title: "This is title",
        description: LOREM400
    };

    const groupId = "GROUP-ID-POSTCONTENT";
    const post = object(label, defaultValue, groupId);
    const reply = [];
    return <Component post={post} reply={reply} />;
};

const LOREM400 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet odio eget risus ultricies pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eu placerat elit. Nulla facilisis tincidunt nisl, vitae tempus diam imperdiet sit amet. Nunc enim mauris, vestibulum ac pellentesque at, tristique egestas est. Etiam at mauris vitae felis ultricies fringilla. Donec accumsan augue tempor laoreet accumsan. Pellentesque tempor leo venenatis felis hendrerit vulputate. Nam mattis nisl ante, vel venenatis lectus finibus a.\n" +
    "\n" +
    "Nam a metus eget nunc tempor auctor. Morbi odio elit, porttitor vitae lacus laoreet, vehicula sodales urna. Etiam tempor varius nisi a fringilla. Mauris velit odio, lacinia id mi non, dapibus varius sapien. Aenean id dapibus purus. Duis nec mollis quam. Vestibulum augue magna, sodales eget consequat et, fermentum eget nisi. Donec tristique urna sed lacus malesuada sodales. Duis semper faucibus mauris at venenatis. Integer porttitor diam tortor, non euismod ex pellentesque eget. Nullam aliquet massa enim. Suspendisse ac metus id lorem sollicitudin pharetra. Pellentesque vel iaculis ex, eu tincidunt tortor. Pellentesque nec lobortis lacus, ut fermentum nunc.\n" +
    "\n" +
    "Nullam at urna vitae est dignissim sagittis. Quisque efficitur odio laoreet magna semper, vel mattis nibh sagittis. Quisque finibus lacinia felis, at scelerisque neque fringilla in. Aliquam convallis magna in magna maximus auctor. Nullam sodales erat nulla, vitae mattis justo pulvinar id. Donec sit amet tristique est. Maecenas et nisl sit amet justo aliquam faucibus. Donec pretium augue id imperdiet condimentum. Integer at leo commodo, eleifend eros sit amet, vestibulum felis.\n" +
    "\n" +
    "Nam ac tortor eu neque finibus ultrices a in velit. Cras quis rutrum nunc. Mauris sagittis velit at nibh pulvinar, in vehicula velit pellentesque. Donec ornare lectus non sem efficitur, in bibendum elit gravida. Duis vitae est eget nunc malesuada elementum et vitae ligula. Maecenas nec urna vel quam accumsan ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In congue mattis nulla, nec convallis enim molestie eu. Curabitur tortor erat, hendrerit id venenatis vitae, pellentesque quis massa.\n" +
    "\n" +
    "Sed quam ipsum, sodales eu nunc eu, luctus feugiat eros. Mauris laoreet malesuada odio, quis fermentum felis elementum a. In ullamcorper nibh mi, aliquam molestie leo luctus ut. Aliquam varius fringilla turpis vel rhoncus. Sed ac metus nec purus posuere auctor non vel sapien. Nulla turpis ex, pretium in turpis sed, feugiat aliquet libero. Mauris non magna sit amet sem auctor molestie sed et metus. Sed bibendum id dui eu tristique. Nullam cursus ex dignissim, consequat purus in, sagittis ex. Praesent porta sem gravida ligula tempus, ut vulputate ligula vestibulum. Maecenas molestie quis diam vitae egestas.\n" +
    "\n" +
    "Morbi fermentum felis vel pellentesque malesuada. Sed sit amet euismod quam. Vivamus vel est risus. Nulla interdum mi risus, eu laoreet nisl lacinia sed. Nam tempus pulvinar dignissim. Mauris nunc risus, vestibulum sed quam vel, egestas scelerisque purus. Nam ultricies magna leo, nec tempor tellus pretium nec. Vivamus ligula mi, cursus eget aliquam id, fermentum ut diam. Pellentesque et ipsum non ligula sodales rhoncus dapibus quis orci. Vivamus commodo felis ac leo euismod efficitur. Integer hendrerit molestie ante, eget pretium metus imperdiet pulvinar.\n" +
    "\n" +
    "In magna ante, ultricies vel finibus ac, efficitur ut augue. Cras magna tellus, dictum convallis congue at, maximus vitae ipsum. Aliquam erat volutpat. Cras tincidunt enim a arcu malesuada, interdum accumsan turpis ultrices. Proin pharetra velit non lacinia gravida. Integer eleifend nec nulla nec molestie. Vivamus interdum, libero nec porta sodales, velit arcu vulputate est, sit amet sollicitudin sem elit eu justo.\n" +
    "\n" +
    "Cras quis purus eget risus dictum efficitur. Cras pharetra nunc vitae sem finibus, ut accumsan diam efficitur. Proin sagittis metus a malesuada egestas. Duis eu quam in nisl vehicula gravida et in lorem. Curabitur sagittis dui non interdum aliquam. Aenean sagittis mi vel leo interdum egestas. Quisque volutpat mi at ultrices tincidunt. Fusce ut lacus aliquet, facilisis justo vitae, finibus ligula. In ac ante consectetur, porttitor ligula in, sagittis enim. Vivamus tincidunt magna neque, non placerat orci facilisis sit amet. Quisque vel facilisis elit. Nam vitae sagittis ligula, sit amet aliquam velit. Nullam lectus arcu, lobortis eget maximus sed, commodo nec ante. Etiam consectetur non neque mattis maximus. Vivamus lectus elit, scelerisque ut neque at, faucibus fermentum est.\n" +
    "\n" +
    "In hac habitasse platea dictumst. Suspendisse sagittis interdum metus iaculis auctor. Morbi consectetur velit vitae dolor efficitur, in feugiat dui pretium. Pellentesque sit amet fermentum neque. Praesent nec velit eget quam sodales feugiat pharetra ac ante. Quisque vitae scelerisque neque. Morbi vehicula odio libero, eu lacinia neque fermentum a. Etiam efficitur varius odio. Integer pharetra scelerisque velit, id suscipit augue tempus a. Pellentesque dui neque, imperdiet at ultricies nec, posuere vel tortor. Aliquam accumsan laoreet felis eu sagittis. Phasellus aliquam, orci a consequat egestas, velit massa tincidunt dui, et vehicula augue ante a erat. Mauris dapibus euismod nisl, vitae suscipit metus eleifend sed. In vestibulum ante eget imperdiet rutrum.\n" +
    "\n" +
    "Phasellus vel porttitor tellus. Morbi sem mauris, suscipit ac iaculis eu, placerat eu dui. Duis felis odio, vulputate sit amet diam nec, blandit posuere erat. Cras nec odio vel ligula tincidunt consequat. Aliquam in dapibus mi, egestas posuere leo. Nulla gravida efficitur orci vel luctus. Donec porttitor, quam nec luctus viverra, erat nulla elementum felis, a elementum sem purus pharetra libero. Donec tincidunt eleifend lorem, vitae faucibus erat semper in. Cras vitae dui ac nisi ullamcorper dictum sed quis justo. Cras mi mauris, cursus vitae sollicitudin volutpat, scelerisque sit amet urna. Quisque tincidunt sem eget purus vulputate, a ornare enim pellentesque. In eleifend rhoncus sem, vel eleifend ante. In eget nunc semper, gravida orci a, porttitor metus. Donec dictum bibendum viverra. Nulla sed ex ante. Fusce vel semper sapien.\n" +
    "\n" +
    "Ut in est in eros lobortis semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Sed mollis viverra nunc quis porta. Nunc semper lorem sit amet est maximus suscipit. Cras sit amet iaculis ante. Vestibulum at magna viverra, fringilla enim et, porta mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a arcu sem. Etiam maximus erat eu tortor hendrerit dignissim. Donec velit justo, pulvinar eu lacus et, sodales mollis leo.\n" +
    "\n" +
    "Morbi quis sollicitudin quam. Maecenas sit amet eros posuere, auctor lectus et, interdum tellus. Duis consequat porttitor bibendum. Quisque vitae dui eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam elit mauris, rhoncus id ullamcorper a, fermentum at eros. Aliquam eu egestas lacus. Duis quis libero augue. Quisque bibendum lectus vitae diam viverra, vitae vehicula lacus gravida. Aenean tempus maximus diam ac lacinia. Duis vitae rutrum tortor.\n" +
    "\n" +
    "Cras consequat sit amet nunc sed faucibus. Praesent posuere felis non tortor porttitor vestibulum. Integer dignissim egestas tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris turpis, tincidunt ac ex eget, commodo porttitor nisi. Nam nisi metus, facilisis eget placerat id, vulputate sit amet felis. Integer elementum libero sit amet velit dictum, id egestas odio egestas.\n" +
    "\n" +
    "Vivamus ac risus efficitur, feugiat tellus quis, condimentum tortor. Sed a mauris ut tellus aliquam aliquam. Nam volutpat ex id felis viverra gravida. Nulla purus magna, ultrices lacinia mauris eget, porta congue lorem. Nam elementum feugiat lectus, sit amet auctor arcu luctus et. Nam fringilla ante ut porttitor hendrerit. Nulla euismod porttitor aliquet. Fusce tristique hendrerit accumsan. Phasellus interdum nisi sodales, tristique nisi interdum, feugiat risus. Nulla facilisis euismod enim, eu ultrices enim dictum in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce dictum dolor justo, interdum facilisis mauris tincidunt id. Suspendisse dictum sapien porta eros lobortis, at tincidunt mi tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n" +
    "\n" +
    "Donec condimentum eros molestie odio malesuada, id mattis quam dictum. Mauris a placerat purus. Fusce gravida ultricies arcu, eu varius est rhoncus at. Duis ac scelerisque lorem. Praesent vehicula blandit dolor, ac consectetur sapien laoreet eu. Ut hendrerit purus diam, at molestie urna gravida ut. Aenean eget tincidunt orci, sed imperdiet tellus. Pellentesque arcu purus, porta sit amet odio id, maximus mollis justo. Praesent aliquet aliquam lectus in luctus. Duis aliquet a nisl eu rutrum. Etiam tempor eleifend lorem.\n" +
    "\n" +
    "Phasellus feugiat, ante id lobortis facilisis, elit urna posuere ex, in lacinia risus nisl in tellus. Fusce malesuada ex metus, vel tincidunt nibh iaculis cursus. Nulla diam arcu, dictum id sodales a, congue quis lorem. Integer vitae erat eu massa porttitor imperdiet. Curabitur eget dictum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec posuere purus, vel sagittis risus. Sed eleifend iaculis lacus, ut vulputate nisl sodales nec. Praesent eget ultrices diam. Nullam at vestibulum dui. Duis ultricies, ligula maximus congue tincidunt, magna lacus auctor metus, quis bibendum quam mauris vel turpis. Quisque lobortis tellus et nisi facilisis commodo. Morbi ut leo a sapien bibendum congue luctus eget turpis. Quisque massa est, aliquam sit amet efficitur vehicula, tincidunt quis nibh. Aenean ac enim posuere, auctor enim ac, accumsan nunc. In hac habitasse platea dictumst.\n" +
    "\n" +
    "Nulla auctor massa nec lacus egestas vehicula. Vivamus accumsan massa at imperdiet ultrices. Nunc ultrices vitae ante eget sagittis. Vestibulum posuere sapien eu metus interdum aliquam. Praesent imperdiet, tortor et vestibulum dictum, velit libero volutpat mi, eget euismod tortor nulla rutrum lectus. Proin finibus dolor quis massa ultricies, volutpat porttitor nisl fringilla. Donec in arcu ac eros venenatis bibendum. Fusce iaculis euismod feugiat. Maecenas eu accumsan est. Nullam placerat, orci vel sodales egestas, nisl magna volutpat enim, a vehicula lorem tortor vitae arcu. Morbi dignissim, ligula ac tincidunt elementum, magna mauris viverra tellus, vel suscipit augue neque sed quam. Curabitur at tellus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n" +
    "\n" +
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus augue turpis, vestibulum dignissim nulla vehicula ut. Integer lobortis orci vel fringilla condimentum. Curabitur fermentum pulvinar urna, a volutpat sem ultrices a. Proin tristique efficitur neque quis tincidunt. Donec aliquet velit quis turpis gravida, vitae auctor libero lobortis. Sed iaculis enim neque, id dapibus metus efficitur eget. Pellentesque libero tellus, commodo a massa ac, volutpat molestie risus. Quisque lectus sapien, pretium a placerat ac, vehicula quis libero. Phasellus posuere ligula non dolor viverra, a tempus mauris accumsan. Sed varius vitae orci id dapibus. Proin facilisis, purus sollicitudin malesuada luctus, mi massa ornare diam, nec ornare sapien neque sed arcu. Phasellus tincidunt bibendum turpis eget mollis. Integer fringilla tempor nibh, non hendrerit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ornare velit erat, non dignissim dui elementum vitae.\n" +
    "\n" +
    "Nulla facilisi. Phasellus non commodo odio, quis iaculis augue. Vestibulum sit amet eros vitae libero volutpat dapibus pretium vel dolor. Fusce vitae tempus diam, a rhoncus massa. Ut facilisis placerat metus, a euismod felis iaculis sit amet. Fusce vestibulum, elit non cursus consequat, arcu lectus ullamcorper risus, quis malesuada ante est quis leo. Maecenas quis convallis dui. In tempus nisi vitae purus mollis, ut laoreet metus pellentesque. In eu odio at nisl vehicula consectetur. Phasellus eleifend sapien quis imperdiet porttitor.\n" +
    "\n" +
    "Morbi eget massa vitae purus pellentesque consequat quis vel augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet enim diam. Morbi in dolor nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempor at tortor non ullamcorper. In elementum mi sit amet leo porta, eget interdum elit dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor erat a odio ultrices congue. Vivamus tincidunt nibh eu vehicula ultricies. Sed rutrum arcu in laoreet consectetur. Mauris cursus, nisi porttitor accumsan tincidunt, mauris sem commodo nisl, vitae mollis mauris ipsum vel tortor. Morbi tincidunt, metus maximus euismod molestie, felis magna condimentum lorem, tincidunt sagittis sem nibh a justo. Duis eget leo at eros dapibus convallis. Integer porta, nisi vel mattis pharetra, nulla augue volutpat augue, a porta ligula mauris ut ante.\n" +
    "\n" +
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus fermentum dolor non commodo vehicula. Nulla pretium odio eget sem aliquam, at posuere ante lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus elementum, neque sit amet consequat tristique, sapien nulla tincidunt leo, ac suscipit orci turpis at ex. Donec augue eros, semper eget malesuada ultricies, dignissim at libero. Donec at velit sit amet justo tristique aliquam. Donec tincidunt aliquet massa vel malesuada. Sed cursus lacus urna, id dapibus diam scelerisque vitae. Nulla lobortis, mauris sed aliquet consectetur, neque mi cursus ligula, sed rhoncus metus libero sed turpis. Aliquam sit amet venenatis tellus. Suspendisse mattis diam est, quis tincidunt est ultricies eget. Cras ut viverra neque. Cras lobortis imperdiet orci, eget finibus tellus sodales vel. Ut nec ex fringilla, vestibulum quam non, blandit erat.\n" +
    "\n" +
    "Curabitur eget eros feugiat, rhoncus lacus ac, mollis justo. Suspendisse pulvinar elementum libero. Integer gravida quam dui, ut aliquam neque posuere nec. Maecenas consequat ipsum lacus. Nulla accumsan massa pretium nulla ultricies faucibus faucibus ut eros. Nunc ultricies, felis eget ornare ornare, neque quam tristique sem, eget luctus massa lorem vel arcu. Donec auctor pellentesque consequat. Maecenas lacinia massa magna, eleifend sollicitudin augue consequat vel. Curabitur luctus placerat tincidunt. Nulla facilisis nisi at justo dictum, in egestas lacus efficitur. Nam consectetur, turpis aliquet egestas volutpat, arcu nibh interdum nisl, quis finibus metus urna a magna. Morbi neque eros, rhoncus a blandit in, gravida et massa. Mauris non eros quis ligula dignissim fringilla. In est lorem, egestas eget neque a, elementum ultricies nisi. Donec dignissim in urna vel porta. Nulla viverra mi molestie magna iaculis, a ultrices mi malesuada.\n" +
    "\n" +
    "Maecenas commodo dictum diam, id tincidunt sem tincidunt id. Praesent pellentesque maximus ex, non malesuada orci semper ut. Sed et ante aliquet, aliquet lacus vitae, efficitur justo. Quisque eleifend ipsum sem, ut ullamcorper nisl dignissim et. Donec ac felis maximus, dictum leo ut, fermentum purus. Duis vitae orci leo. Aliquam a aliquam orci, eget dignissim lacus. Suspendisse fermentum non velit sit amet congue. Donec ut sem erat. Sed luctus mattis ante eget porttitor. Aliquam eu gravida ante, at scelerisque magna. Mauris tincidunt a tortor nec fringilla.\n" +
    "\n" +
    "Etiam quis vehicula sem, id ornare ipsum. Quisque quis diam ligula. Donec rutrum sem a sagittis iaculis. Suspendisse imperdiet pellentesque mauris id fringilla. Duis consequat pharetra felis in cursus. Sed dapibus, ante in vulputate tempus, ipsum arcu egestas tellus, a gravida ex orci vel lacus. Morbi eget volutpat neque, eget semper magna. Suspendisse mattis nibh nec lacus vulputate, a tempus elit cursus. In arcu urna, posuere vitae magna in, gravida finibus magna.\n" +
    "\n" +
    "Donec consequat est eu magna dignissim, semper faucibus felis ultricies. Cras tincidunt volutpat rutrum. Integer velit diam, scelerisque nec imperdiet rutrum, dapibus sed arcu. Praesent vitae leo a urna finibus tincidunt cursus quis leo. Mauris rhoncus tristique mauris, a pharetra risus viverra eu. Duis sed turpis ante. Ut sollicitudin, orci in accumsan varius, est turpis iaculis ligula, eu consequat ex nunc non augue. Curabitur tincidunt convallis purus sit amet dapibus. Nam auctor metus eu eros finibus, id feugiat mauris pretium. Maecenas fringilla odio tristique velit elementum, ac ullamcorper eros mollis. Praesent congue ante sit amet tempor imperdiet. Ut id leo gravida, volutpat diam nec, scelerisque urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In neque tellus, pulvinar ac nisi quis, efficitur tincidunt lectus.\n" +
    "\n" +
    "Proin nec risus ut neque scelerisque posuere. Duis ac aliquet nisi. Integer pretium ullamcorper ligula, porttitor vehicula ipsum gravida et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce cursus rutrum ante id efficitur. Aliquam eros eros, rutrum a tempor ut, facilisis a sem. Aenean vestibulum tempus mattis. Donec ex lacus, porttitor ut ultricies vel, suscipit nec erat. Nullam at fringilla erat, gravida varius magna. Nunc vitae ipsum enim.";
