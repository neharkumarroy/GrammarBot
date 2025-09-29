
        // Dictionary of common English words
        const dictionary = [
            'a', 'ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 
            'act', 'action', 'activity', 'actually', 'add', 'address', 'administration', 'admit', 
            'adult', 'after', 'again', 'against', 'age', 'agency', 'agent', 'ago', 'agree', 
            'agreement', 'ahead', 'air', 'all', 'allow', 'almost', 'alone', 'along', 'already', 
            'also', 'although', 'always', 'American', 'among', 'amount', 'analysis', 'and', 
            'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 
            'approach', 'area', 'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 
            'as', 'ask', 'assume', 'at', 'attack', 'attention', 'attorney', 'audience', 'author', 
            'authority', 'available', 'avoid', 'away', 'baby', 'back', 'bad', 'bag', 'ball', 
            'bank', 'bar', 'base', 'be', 'beat', 'beautiful', 'because', 'become', 'bed', 
            'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best', 'better', 
            'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue', 
            'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother', 
            'budget', 'build', 'building', 'business', 'but', 'buy', 'by', 'call', 'camera', 
            'campaign', 'can', 'cancer', 'candidate', 'capital', 'car', 'card', 'care', 'career', 
            'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central', 'century', 'certain', 
            'certainly', 'chair', 'challenge', 'chance', 'change', 'character', 'charge', 'check', 
            'child', 'choice', 'choose', 'church', 'citizen', 'city', 'civil', 'claim', 'class', 
            'clear', 'clearly', 'close', 'coach', 'cold', 'collection', 'college', 'color', 
            'come', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 
            'concern', 'condition', 'conference', 'Congress', 'consider', 'consumer', 'contain', 
            'continue', 'control', 'cost', 'could', 'country', 'couple', 'course', 'court', 
            'cover', 'create', 'crime', 'cultural', 'culture', 'cup', 'current', 'customer', 
            'cut', 'dark', 'data', 'daughter', 'day', 'dead', 'deal', 'death', 'debate', 
            'decade', 'decide', 'decision', 'deep', 'defense', 'degree', 'Democrat', 
            'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 
            'development', 'die', 'difference', 'different', 'difficult', 'dinner', 'direction', 
            'director', 'discover', 'discuss', 'discussion', 'disease', 'do', 'doctor', 'dog', 
            'door', 'down', 'draw', 'dream', 'drive', 'drop', 'drug', 'during', 'each', 'early', 
            'east', 'easy', 'eat', 'economic', 'economy', 'edge', 'education', 'effect', 
            'effort', 'eight', 'either', 'election', 'else', 'employee', 'end', 'energy', 
            'enjoy', 'enough', 'enter', 'entire', 'environment', 'environmental', 'especially', 
            'establish', 'even', 'evening', 'event', 'ever', 'every', 'everybody', 'everyone', 
            'everything', 'evidence', 'exactly', 'example', 'executive', 'exist', 'expect', 
            'experience', 'expert', 'explain', 'eye', 'face', 'fact', 'factor', 'fail', 'fall', 
            'family', 'far', 'fast', 'father', 'fear', 'federal', 'feel', 'feeling', 'few', 
            'field', 'fight', 'figure', 'fill', 'film', 'final', 'finally', 'financial', 'find', 
            'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fish', 'five', 'floor', 'fly', 
            'focus', 'follow', 'food', 'foot', 'for', 'force', 'foreign', 'forget', 'form', 
            'former', 'forward', 'four', 'free', 'friend', 'from', 'front', 'full', 'fund', 
            'future', 'game', 'garden', 'gas', 'general', 'generation', 'get', 'girl', 'give', 
            'glass', 'go', 'goal', 'good', 'government', 'great', 'green', 'ground', 'group', 
            'grow', 'growth', 'guess', 'gun', 'guy', 'hair', 'half', 'hand', 'hang', 'happen', 
            'happy', 'hard', 'have', 'he', 'head', 'health', 'hear', 'heart', 'heat', 'heavy', 
            'help', 'her', 'here', 'herself', 'high', 'him', 'himself', 'his', 'history', 'hit', 
            'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour', 'house', 'how', 
            'however', 'huge', 'human', 'hundred', 'husband', 'I', 'idea', 'identify', 'if', 
            'image', 'imagine', 'impact', 'important', 'improve', 'in', 'include', 'including', 
            'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 
            'instead', 'institution', 'interest', 'interesting', 'international', 'interview', 
            'into', 'investment', 'involve', 'issue', 'it', 'item', 'its', 'itself', 'job', 
            'join', 'just', 'keep', 'key', 'kid', 'kill', 'kind', 'kitchen', 'know', 'knowledge', 
            'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 'law', 'lawyer', 
            'lay', 'lead', 'leader', 'learn', 'least', 'leave', 'left', 'leg', 'legal', 'less', 
            'let', 'letter', 'level', 'lie', 'life', 'light', 'like', 'likely', 'line', 'list', 
            'listen', 'little', 'live', 'local', 'long', 'look', 'lose', 'loss', 'lot', 'love', 
            'low', 'machine', 'magazine', 'main', 'maintain', 'major', 'majority', 'make', 
            'man', 'manage', 'management', 'manager', 'many', 'market', 'marriage', 'material', 
            'matter', 'may', 'maybe', 'me', 'mean', 'measure', 'media', 'medical', 'meet', 
            'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'might', 
            'military', 'million', 'mind', 'minute', 'miss', 'model', 'modern', 'moment', 
            'money', 'month', 'more', 'morning', 'most', 'mother', 'mouth', 'move', 'movement', 
            'movie', 'Mr', 'Mrs', 'much', 'music', 'must', 'my', 'myself', 'name', 'nation', 
            'national', 'natural', 'nature', 'near', 'nearly', 'necessary', 'need', 'network', 
            'never', 'new', 'news', 'next', 'nice', 'night', 'no', 'none', 'nor', 'north', 
            'not', 'note', 'nothing', 'notice', 'now', 'number', 'occur', 'of', 'off', 'offer', 
            'office', 'officer', 'official', 'often', 'oh', 'oil', 'ok', 'old', 'on', 'once', 
            'one', 'only', 'onto', 'open', 'operation', 'opportunity', 'option', 'or', 'order', 
            'organization', 'other', 'others', 'our', 'out', 'outside', 'over', 'own', 'owner', 
            'page', 'pain', 'painting', 'paper', 'parent', 'part', 'participant', 'particular', 
            'particularly', 'partner', 'party', 'pass', 'past', 'patient', 'pattern', 'pay', 
            'peace', 'people', 'per', 'perform', 'performance', 'perhaps', 'period', 'person', 
            'personal', 'phone', 'physical', 'pick', 'picture', 'piece', 'place', 'plan', 
            'plant', 'play', 'player', 'PM', 'point', 'police', 'policy', 'political', 
            'politics', 'poor', 'popular', 'population', 'position', 'positive', 'possible', 
            'power', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 
            'prevent', 'price', 'private', 'probably', 'problem', 'process', 'produce', 
            'product', 'production', 'professional', 'professor', 'program', 'project', 
            'property', 'protect', 'prove', 'provide', 'public', 'pull', 'purpose', 'push', 
            'put', 'quality', 'question', 'quickly', 'quite', 'race', 'radio', 'raise', 'range', 
            'rate', 'rather', 'reach', 'read', 'ready', 'real', 'reality', 'realize', 'really', 
            'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'red', 'reduce', 
            'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 
            'remove', 'report', 'represent', 'Republican', 'require', 'research', 'resource', 
            'respond', 'response', 'responsibility', 'rest', 'result', 'return', 'reveal', 
            'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'run', 
            'safe', 'same', 'save', 'say', 'scene', 'school', 'science', 'scientist', 'score', 
            'sea', 'season', 'seat', 'second', 'section', 'security', 'see', 'seek', 'seem', 
            'sell', 'send', 'senior', 'sense', 'series', 'serious', 'serve', 'service', 'set', 
            'seven', 'several', 'sex', 'sexual', 'shake', 'share', 'she', 'shoot', 'short', 
            'shot', 'should', 'shoulder', 'show', 'side', 'sign', 'significant', 'similar', 
            'simple', 'simply', 'since', 'sing', 'single', 'sister', 'sit', 'site', 'situation', 
            'six', 'size', 'skill', 'skin', 'small', 'smile', 'so', 'social', 'society', 
            'soldier', 'some', 'somebody', 'someone', 'something', 'sometimes', 'son', 'song', 
            'soon', 'sort', 'sound', 'source', 'south', 'southern', 'space', 'speak', 
            'special', 'specific', 'speech', 'spend', 'sport', 'spring', 'staff', 'stage', 
            'stand', 'standard', 'star', 'start', 'state', 'statement', 'station', 'stay', 
            'step', 'still', 'stock', 'stop', 'store', 'story', 'strategy', 'street', 
            'strong', 'structure', 'student', 'study', 'stuff', 'style', 'subject', 'success', 
            'successful', 'such', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 
            'sure', 'surface', 'system', 'table', 'take', 'talk', 'task', 'tax', 'teach', 
            'teacher', 'team', 'technology', 'television', 'tell', 'ten', 'tend', 'term', 
            'test', 'than', 'thank', 'that', 'the', 'their', 'them', 'themselves', 'then', 
            'theory', 'there', 'these', 'they', 'thing', 'think', 'third', 'this', 'those', 
            'though', 'thought', 'thousand', 'threat', 'three', 'through', 'throughout', 
            'throw', 'thus', 'time', 'to', 'today', 'together', 'tonight', 'too', 'top', 
            'total', 'tough', 'toward', 'town', 'trade', 'traditional', 'training', 'travel', 
            'treat', 'treatment', 'tree', 'trial', 'trip', 'trouble', 'true', 'truth', 'try', 
            'turn', 'TV', 'two', 'type', 'under', 'understand', 'unit', 'until', 'up', 'upon', 
            'us', 'use', 'usually', 'value', 'various', 'very', 'victim', 'view', 'violence', 
            'visit', 'voice', 'vote', 'wait', 'walk', 'wall', 'want', 'war', 'watch', 'water', 
            'way', 'we', 'weapon', 'wear', 'week', 'weight', 'well', 'west', 'western', 'what', 
            'whatever', 'when', 'where', 'whether', 'which', 'while', 'white', 'who', 'whole', 
            'whom', 'whose', 'why', 'wide', 'wife', 'will', 'win', 'wind', 'window', 'wish', 
            'with', 'within', 'without', 'woman', 'wonder', 'word', 'work', 'worker', 'world', 
            'worry', 'would', 'write', 'writer', 'wrong', 'yard', 'yeah', 'year', 'yes', 
            'yet', 'you', 'young', 'your', 'yourself'
        ];

        // Common typos mapping
        const commonTypos = {
            'recieve': 'receive',
            'seperate': 'separate',
            'definately': 'definitely',
            'accomodate': 'accommodate',
            'occured': 'occurred',
            'alot': 'a lot',
            'untill': 'until',
            'wich': 'which',
            'teh': 'the',
            'adn': 'and',
            'thier': 'their',
            'tahn': 'than',
            'exmaple': 'example',
            'funtion': 'function',
            'helo': 'hello',
            'worls': 'world',
            'becuase': 'because',
            'neccessary': 'necessary',
            'tommorrow': 'tomorrow',
            'wierd': 'weird',
            'acheive': 'achieve',
            'arguement': 'argument',
            'comming': 'coming',
            'equiptment': 'equipment',
            'goverment': 'government',
            'libary': 'library',
            'pronounciation': 'pronunciation',
            'truely': 'truly'
        };

        // Spelling correction functions
        function correctSpelling(word, options = {}) {
            const {
                maxDistance = 2,
                usePhonetic = true,
                useCommonTypos = true,
                aggressiveMode = false
            } = options;

            if (!word || typeof word !== 'string') return word;
            
            const lowerWord = word.toLowerCase();
            
            // 1. Exact match check
            if (dictionary.includes(lowerWord)) {
                return preserveCase(word, lowerWord);
            }

            // 2. Common typos mapping
            if (useCommonTypos && commonTypos[lowerWord]) {
                return preserveCase(word, commonTypos[lowerWord]);
            }

            // 3. Find closest word using Levenshtein distance
            let closestWord = getClosestWord(lowerWord, dictionary, maxDistance);
            
            if (closestWord) {
                return preserveCase(word, closestWord);
            }

            // 4. Phonetic matching for extreme cases
            if (usePhonetic) {
                const phoneticMatch = getPhoneticMatch(lowerWord, dictionary);
                if (phoneticMatch) {
                    return preserveCase(word, phoneticMatch);
                }
            }

            // 5. Aggressive mode - try harder
            if (aggressiveMode) {
                closestWord = getClosestWord(lowerWord, dictionary, maxDistance + 1);
                if (closestWord) {
                    return preserveCase(word, closestWord);
                }
                
                // Try word segmentation for combined words
                const segmented = tryWordSegmentation(lowerWord, dictionary);
                if (segmented) {
                    return preserveCase(word, segmented);
                }
            }

            return word;
        }

        function getClosestWord(word, dictionary, maxDistance = 2) {
            let minDistance = Infinity;
            let closest = null;

            for (const correctWord of dictionary) {
                const dist = levenshtein(word, correctWord.toLowerCase());
                
                if (dist === 0) return correctWord;
                
                if (dist < minDistance && dist <= maxDistance) {
                    minDistance = dist;
                    closest = correctWord;
                }
            }

            return closest;
        }

        function levenshtein(a, b) {
            if (a.length === 0) return b.length;
            if (b.length === 0) return a.length;

            const matrix = Array(b.length + 1).fill(null).map(() => 
                Array(a.length + 1).fill(null)
            );

            for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
            for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

            for (let j = 1; j <= b.length; j++) {
                for (let i = 1; i <= a.length; i++) {
                    const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                    matrix[j][i] = Math.min(
                        matrix[j][i - 1] + 1,
                        matrix[j - 1][i] + 1,
                        matrix[j - 1][i - 1] + cost
                    );
                }
            }

            return matrix[b.length][a.length];
        }

        function preserveCase(original, corrected) {
            if (original === original.toUpperCase()) {
                return corrected.toUpperCase();
            } else if (original[0] === original[0].toUpperCase()) {
                return corrected.charAt(0).toUpperCase() + corrected.slice(1);
            }
            return corrected;
        }

        function getPhoneticMatch(word, dictionary) {
            const getPhoneticCode = (str) => {
                if (!str) return '';
                let code = str.charAt(0).toUpperCase();
                const mapping = {
                    'bfpv': '1', 'cgjkqsxz': '2', 'dt': '3',
                    'l': '4', 'mn': '5', 'r': '6'
                };
                
                for (let i = 1; i < str.length; i++) {
                    const char = str[i];
                    for (const [letters, digit] of Object.entries(mapping)) {
                        if (letters.includes(char)) {
                            if (digit !== code[code.length - 1]) {
                                code += digit;
                            }
                            break;
                        }
                    }
                }
                
                return (code + '000').substring(0, 4);
            };

            const targetCode = getPhoneticCode(word);
            for (const dictWord of dictionary) {
                if (getPhoneticCode(dictWord) === targetCode) {
                    return dictWord;
                }
            }
            
            return null;
        }

        function tryWordSegmentation(word, dictionary) {
            for (let i = 1; i < word.length - 1; i++) {
                const part1 = word.substring(0, i);
                const part2 = word.substring(i);
                
                if (dictionary.includes(part1) && dictionary.includes(part2)) {
                    return part1 + ' ' + part2;
                }
            }
            return null;
        }

        function correctText(text, options = {}) {
            const tokens = text.split(/(\W+)/);
            let corrections = 0;
            
            const result = tokens.map(token => {
                if (token.match(/^\w+$/)) {
                    const original = token;
                    const corrected = correctSpelling(token, options);
                    
                    if (corrected !== original) {
                        corrections++;
                        return `<span class="corrected-word" title="Corrected from '${original}'">${corrected}</span>`;
                    }
                    return corrected;
                }
                return token;
            }).join('');
            
            return { text: result, corrections };
        }

        // DOM manipulation and event handling
        document.addEventListener('DOMContentLoaded', function() {
            const inputText = document.getElementById('inputText');
            const outputText = document.getElementById('outputText');
            const correctBtn = document.getElementById('correctBtn');
            const resetBtn = document.getElementById('resetBtn');
            const correctionMode = document.getElementById('correctionMode');
            const maxDistance = document.getElementById('maxDistance');
            const wordCount = document.getElementById('wordCount');
            const correctionCount = document.getElementById('correctionCount');
            const processingTime = document.getElementById('processingTime');
            
            function updateWordCount() {
                const text = inputText.value;
                const words = text.match(/\b\w+\b/g) || [];
                wordCount.textContent = `Words: ${words.length}`;
            }
            
            function performCorrection() {
                const startTime = performance.now();
                const text = inputText.value;
                const options = {
                    aggressiveMode: correctionMode.value === 'aggressive',
                    maxDistance: parseInt(maxDistance.value)
                };
                
                const result = correctText(text, options);
                outputText.innerHTML = result.text;
                
                const endTime = performance.now();
                correctionCount.textContent = `Corrections: ${result.corrections}`;
                processingTime.textContent = `Time: ${Math.round(endTime - startTime)}ms`;
            }
            
            correctBtn.addEventListener('click', performCorrection);
            
            resetBtn.addEventListener('click', function() {
                inputText.value = 'Helo worls! This is an exmaple of how our spell corection sistem works. It can fix commen mistaks like recieve, seperate, and definately.';
                outputText.textContent = 'Corrected text will appear here...';
                wordCount.textContent = 'Words: 0';
                correctionCount.textContent = 'Corrections: 0';
                processingTime.textContent = 'Time: 0ms';
                updateWordCount();
            });
            
            inputText.addEventListener('input', updateWordCount);
            
            // Initialize
            updateWordCount();
        });
    