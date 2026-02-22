# Career Presentation: Product Design for 4th & 5th Graders

## Plan

---

## Audience Notes (ages 9-11)

- Attention span: ~10-15 minutes before needing a shift in format
- They respond to: humor, surprise, things they recognize, participation, and anything that feels "behind the scenes"
- They tune out: walls of text, abstract concepts, long monologues
- Key insight: **every slide should be mostly visual with you narrating, not reading**

---

## Recommendations for Engagement

### 1. Time budget & pacing
A full class period is ~45-50 minutes. Suggested breakdown:

| Segment | Duration | Format |
|---|---|---|
| "Everything is designed" intro | 5 min | Slides + discussion |
| Types of design | 5 min | Slides (visual quiz) |
| What is digital design? | 5 min | Slides + your work |
| My tools (Figma, code, AI) | 5 min | Slides + quick screen share |
| VR / spatial design | 5 min | Slides + Quest demo |
| Live AI demo: build a game | 10 min | Live coding |
| Q&A | 10 min | Open mic |

### 2. Use participation, not just presentation
- **"Raise your hand if..."** prompts throughout (e.g., "Raise your hand if you've used Instagram / played a VR game")
- **Quick polls**: "Who designed this? A person or a computer?" (trick question — always a person, even if a computer helped)
- **Spot the design**: Show a photo of a messy room vs. a well-designed room. Ask what's different.

### 3. Beat Saber: skip it as a slide, use it as the VR demo
Rather than showing Beat Saber separately, let a kid play 30 seconds of it during the VR section. That's far more memorable than a screenshot. If logistics don't allow passing the headset around, a short video clip works.

### 4. The live AI demo is your strongest closer
Building a simple web game live with Claude Code in front of the class is genuinely impressive to adults — to kids it will feel like magic. Recommendations:
- **Keep the game dead simple**: a click-the-target game, a color-matching game, or a simple "catch falling objects" game
- **Let the kids pick the theme**: "Should the game have dinosaurs, space aliens, or pizza?" — this gives them ownership
- **Have a backup**: Pre-build the game in advance so if anything goes wrong you can just open it

### 5. What to cut if you're short on time
Drop the "types of design" taxonomy section first — it's the most abstract. Kids will remember the VR headset and the AI demo, not the difference between industrial and interior design.

---

## Slide Deck Structure

The website will be a **single-page HTML slide deck** using simple vanilla HTML/CSS/JS (no heavy frameworks). Navigation via arrow keys and swipe. Big visuals, minimal text, fun transitions.

### Slide Sequence

#### Act 1: "Everything Is Designed" (5 slides)

1. **Title slide**
   - "How I Design the Future" (or similar kid-friendly title)
   - Your name, illustration/photo of you

2. **"Look around this room"**
   - Prompt: "Everything you see was designed by someone"
   - Visual: annotated photo of a classroom with arrows pointing to designed objects (clock, desk, whiteboard, door handle, lights)

3. **"Even the boring stuff"**
   - Grid of surprising designed things: a toilet, a stop sign, a cereal box, a seatbelt, a zipper
   - Prompt: "Someone had to sit down and figure out how each of these should work"

4. **"Design = solving problems for people"**
   - Simple equation visual: Problem + Creativity = Design
   - Example: "People kept getting lost → someone designed road signs"

5. **"There are LOTS of types of design"**
   - Visual grid showing 6 types with one iconic image each:
     - Fashion (sneaker)
     - Interior (cool room)
     - Graphic (movie poster)
     - Industrial (car)
     - Experience (theme park map)
     - Digital (phone screen) ← highlighted/starred

#### Act 2: "What I Actually Do" (5 slides)

6. **"I'm a digital product designer"**
   - Photo of you at work / your desk setup
   - One sentence: "I design the apps and screens that millions of people use every day"

7. **"I designed things at Facebook / Meta for 10 years"**
   - Show 2-3 recognizable UI screenshots (news feed, reactions, etc.)
   - "You've probably used something I helped build"
   - (This is a huge credibility moment for kids — they KNOW these products)

8. **"My tools"**
   - Three-panel visual:
     - Figma logo + screenshot → "This is where I draw and plan"
     - Code editor + HTML → "This is how I build it"
     - AI / Claude → "This is my newest helper"
   - Keep it brief — just enough for them to see the tools exist

9. **"Now I design for VR and AR"**
   - Dramatic visual: photo/render of someone in a Quest headset
   - "Instead of designing for a phone screen, I design for the world around you"
   - Brief explanation: VR = you go into the computer's world, AR = the computer comes into your world

10. **"Let me show you"**
    - Transition slide before the live VR demo
    - "Who wants to see what it's like to design for virtual reality?"

#### Act 3: Live Demos (no slides — this is performance time)

11. **VR Demo card**
    - Simple "DEMO TIME" slide with Quest headset visual
    - You show the Unity prototype on the headset (cast to screen if possible)
    - Optional: let a student try Beat Saber or your prototype for 30 seconds

12. **AI Demo card**
    - "Let's build a game RIGHT NOW with AI"
    - You open Claude Code and build a small web game live
    - Let kids vote on the theme

#### Act 4: Wrap-Up (2 slides)

13. **"Design is for everyone"**
    - Message: "You don't need to wait until you grow up to start designing. If you've ever drawn a map, made a poster, built something in Minecraft, or customized your character in a game — you're already designing."
    - Visual: kid-relatable design activities (Minecraft builds, drawings, etc.)

14. **"Questions?"**
    - Big Q&A slide
    - Maybe include 2-3 fun prompts to get questions started:
      - "What's the weirdest thing you've ever designed?"
      - "What app would you invent?"
      - "Will we all live in VR someday?"

---

## Technical Implementation

### Stack
- **Single `index.html` file** with embedded CSS and JS
- No build tools, no npm, no framework — just open in a browser
- This keeps it dead simple to present from any computer

### Features
- Arrow key / click navigation between slides
- Slide transitions (subtle fade or slide)
- Progress indicator (dots or bar at bottom)
- Responsive — works on projector resolutions
- Large text (minimum 32px body, 48px+ headings)
- High-contrast colors for projector visibility
- Touch/swipe support for tablet if needed

### Visual Style
- Bold, saturated colors (kid-friendly but not childish)
- Large photos and illustrations as backgrounds
- Minimal text per slide (max ~15 words)
- Rounded shapes, playful but clean typography
- Dark background with bright text (better for projectors)

### Image Strategy
- Use placeholder boxes with descriptive labels for all images
- You'll swap in real photos/screenshots before presenting
- CSS makes swapping trivial — just replace `src` attributes

---

## File Structure

```
/
  index.html          # The entire slide deck
  styles.css          # All styles
  slides.js           # Navigation logic + transitions
  assets/
    images/           # Placeholder + real images
  demo-game/
    index.html        # Pre-built backup of the AI demo game
```

---

## Summary of Key Recommendations

1. **Keep slides visual, you do the talking** — no bullet points on screen
2. **Interact every 3-4 slides** — question, poll, or "raise your hand"
3. **The VR demo and AI demo are your headliners** — everything else is setup
4. **Let kids choose the game theme** during the AI demo — instant buy-in
5. **Have a pre-built backup game** in case the live demo hits issues
6. **End with "you're already a designer"** — empowering message for the age group
7. **Cut the taxonomy section first** if you're running long — it's the least sticky part
8. **Relatable references matter**: Minecraft, Roblox, Fortnite > abstract design theory
