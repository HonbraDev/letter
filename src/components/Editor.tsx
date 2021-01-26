import React, { useRef } from "react";
import ReactQuill from "react-quill";

function Editor(props: {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  const quillRef = useRef(null);
  return (
    <ReactQuill
      value={props.value}
      onChange={props.setValue}
      theme=""
      id="editor"
      ref={quillRef}
    />
  );

  /* unction getEditor() {
    return getRef().getEditor();
  }
  function getRef() {
    return (quillRef.current as unknown) as quillRefType;
  } */
}

export default Editor;
/*
 <Button
            variant="contained"
            onClick={() =>
              props.setValue({
                ops: [
                  { insert: "Grass smells good" },
                  { attributes: { header: 1 }, insert: "\n" },
                  {
                    insert:
                      "Stare out cat door then go back inside ask to go outside and ask to come inside and ask to go outside and ask to come inside don't nosh on the birds",
                  },
                  { attributes: { header: 2 }, insert: "\n" },
                  {
                    attributes: { color: "#000000" },
                    insert:
                      "Cat ipsum dolor sit amet, sit by the fire. Bathe private parts with tongue then lick owner's face eat and than sleep on your face cats are a queer kind of folk meowing non stop for food but make muffins what the heck just happened, something feels fishy the cat was chasing the mouse. Drool kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment ooooh feather moving feather!. Burrow under covers nyaa nyaa flop over sit in box destroy house in 5 seconds or cat snacks. Ptracy lies down the fat cat sat on the mat bat away with paws, and instantly break out into full speed gallop across the house for no reason but cats are cute eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Dont wait for the storm to pass, dance in the rain jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans or my cat stared at me he was sipping his tea, too jump up to edge of bath, fall in then scramble in a mad panic to get out, but yowling nonstop the whole night or cough hairball on conveniently placed pants. Then cats take over the world get suspicious of own shadow then go play with toilette paper if it fits i sits. Eat fish on floor murder hooman toes, found somthing move i bite it tail but paw at beetle and eat it before it gets away at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in. Sniff all the things pet me pet me don't pet me tweeting a baseball.",
                  },
                  { insert: "\n" },
                  {
                    attributes: { color: "#000000" },
                    insert:
                      "Need to chase tail cats go for world domination small kitty warm kitty little balls of fur so meow all night. Peer out window, chatter at birds, lure them to mouth scratch at the door then walk away. Fooled again thinking the dog likes me the fat cat sat on the mat bat away with paws i heard this rumor where the humans are our owners, pfft, what do they know?! pushes butt to face and Gate keepers of hell stare at owner accusingly then wink. Soft kitty warm kitty little ball of furr. Mark territory sweet beast, yet catto munch salmono, or has closed eyes but still sees you so climb into cupboard and lick the salt off rice cakes what the heck just happened, something feels fishy so gnaw the corn cob. Spread kitty litter all over house purr purr purr until owner pets why owner not pet me hiss scratch meow meow and walk away be superior, and going to catch the red dot today going to catch the red dot today at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in. Mew mew eat and than sleep on your face meowing chowing and wowing but bathe private parts with tongue then lick owner's face yet poop in litter box, scratch the walls. Spend all night ensuring people don't sleep sleep all day human is in bath tub, emergency! drowning! meooowww! but hiss at vacuum cleaner headbutt owner's knee. Chase after silly colored fish toys around the house funny little cat chirrup noise shaking upright tail when standing next to you or throw down all the stuff in the kitchen. Cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip . Sit in a box for hours kitty poochy rub face on everything, so give me some of your food give me some of your food give me some of your food meh, i don't want it or asdflkjaertvlkjasntvkjn (sits on keyboard) and eat fish on floor, i like big cats and i can not lie. Eats owners hair then claws head. Howl on top of tall thing human give me attention meow sleep everywhere, but not in my bed do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life for behind the couch, i can haz but sweet beast. Kitty poochy weigh eight pounds but take up a full-size bed give me some of your food give me some of your food give me some of your food meh, i don't want it jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back. Tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad freak human out make funny noise mow mow mow mow mow mow success now attack human for bring your owner a dead bird ignore the squirrels, you'll never catch them anyway. Stare out cat door then go back inside find empty spot in cupboard and sleep all day, and sniff all the things rub my belly hiss fight an alligator and win headbutt owner's knee. No, you can't close the door, i haven't decided whether or not i wanna go out get scared by sudden appearance of cucumber flop over, yet meowzer, loves cheeseburgers. Litter kitter kitty litty little kitten big roar roar feed me sit in window and stare oooh, a bird, yum. Trip owner up in kitchen i want food. Enslave the hooman meowing chowing and wowing and make meme, make cute face yet cereal boxes make for five star accommodation so if it fits, i sits climb leg. Mew lay on arms while you're using the keyboard.",
                  },
                  { insert: "\n" },
                  {
                    attributes: { color: "#000000" },
                    insert:
                      "All of a sudden cat goes crazy cats making all the muffins my water bowl is clean and freshly replenished, so i'll drink from the toilet i like frogs and 0 gravity. You are a captive audience while sitting on the toilet, pet me mesmerizing birds curl up and sleep on the freshly laundered towels. Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day kitty power yet i cry and cry and cry unless you pet me, and then maybe i cry just for fun, so let me in let me out let me in let me out let me in let me out who broke this door anyway but thinking longingly about tuna brine annoy owner until he gives you food say meow repeatedly until belly rubs, feels good but good now the other hand, too. Catto munch salmono sweet beast, so pushes butt to face for meow meow, i tell my human so let me in let me out let me in let me out let me in let me out who broke this door anyway . Meow in empty rooms licks your face yet allways wanting food. I like big cats and i can not lie oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap meow so snuggles up to shoulders or knees and purrs you to sleep let me in let me out let me in let me out let me in let me out who broke this door anyway . Put toy mouse in food bowl run out of litter box at full speed present belly, scratch hand when stroked stick butt in face scoot butt on the rug.",
                  },
                ],
              })
            }
          >
            Set state
          </Button>
 */
